import Parser from "rss-parser";

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)'
  }
});

// Flux RSS
const feeds = {
  jeuxVideo: "https://www.jeuxvideo.com/rss/rss-news.xml",
  lol: "https://www.team-aaa.com/rss/game_lol.xml",
  csgo: "https://www.team-aaa.com/rss/game_CS2.xml", 
  cinema: "https://www.allocine.fr/rss/news-cine.xml"
};

// Correspondance des catégories frontend -> backend
const categoryMapping = {
  esports: ['lol', 'csgo'], // 'esports' regroupe lol et csgo
  all: Object.keys(feeds)   // 'all' prend tout
};

export default async function handler(req, res) {
  const { category = "jeuxVideo" } = req.query;

  console.log(`=== RSS Debug Info ===`);
  console.log(`Category: ${category}`);

  try {
    // Gestion des catégories spéciales (esports et all)
    if (categoryMapping[category]) {
      const categoriesToFetch = categoryMapping[category];
      const allItems = await Promise.all(
        categoriesToFetch.map(async cat => {
          try {
            const feed = await parser.parseURL(feeds[cat]);
            return feed.items.map(item => ({
              ...item,
              originalCategory: cat,
              pubDate: item.pubDate || item.isoDate || new Date().toISOString()
            }));
          } catch (err) {
            console.error(`Error fetching ${cat}:`, err);
            return [];
          }
        })
      ).then(results => results.flat());

      // Trier par date
      allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      return res.status(200).json(allItems);
    }

    // Gestion des catégories normales
    const feedUrl = feeds[category];
    if (!feedUrl) {
      console.log(`❌ Invalid category: ${category}`);
      return res.status(400).json({ error: "Invalid category" });
    }

    console.log(`🔄 Fetching ${category} feed...`);
    const feed = await parser.parseURL(feedUrl);
    
    const items = feed.items.map(item => ({
      title: item.title || 'Titre non disponible',
      link: item.link || '#',
      pubDate: item.pubDate || item.isoDate || 'Date non disponible',
      contentSnippet: item.contentSnippet || item.content?.substring(0, 200) || '',
      enclosure: item.enclosure,
      originalCategory: category
    }));

    // Trier par date
    items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    return res.status(200).json(items);
    
  } catch (err) {
    console.log(`❌ Error fetching feed:`, err);
    return res.status(500).json({ error: err.message });
  }
}