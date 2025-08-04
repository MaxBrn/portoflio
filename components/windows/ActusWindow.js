import { useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { IoMdOpen } from 'react-icons/io';

const ActusWindow = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleArticles, setVisibleArticles] = useState(5);

  const categories = [
    { key: "all", label: "TOUT" },
    { key: "jeuxVideo", label: "JEUX VIDEO" },
    { key: "esports", label: "ESPORTS" },
    { key: "cinema", label: "CINEMA" }
  ];

  const gameBadges = {
    lol: { label: "LoL", color: "bg-border" },
    csgo: { label: "CS2", color: "bg-orange-500" }
  };

  const fetchFeed = async () => {
    setLoading(true);
    setError(null);
    setVisibleArticles(10);
    
    try {
      const res = await fetch(`/api/rss?category=${category}`);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      const sortedArticles = data.sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
      
      setArticles(sortedArticles);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 5);
  };

  useEffect(() => {
    fetchFeed();
  }, [category]);

  if (loading) {
    return (
      <div className="bg-bgColor pb-20 flex md:pt-10">
        <div className="text-center border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button w-auto mx-auto">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <p className="mt-3">Chargement des actualités...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bgColor pb-20 md:pt-10 flex">
        <div className="w-auto mx-auto text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button">
            <p className="text-red-500">Oops on dirait qu'il y a eu un problème dans la récupération des actualités.</p>
            <button
              onClick={fetchFeed}
              className="mt-4 p-2 bg-button rounded-full hover:bg-hover hover:rotate-180 transition-transform duration-300"
            >
              <LuRefreshCw className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryLabel = (article) => {
    if (category === "all") {
      let cat = categories.find(c => c.key === article.originalCategory)?.label || article.originalCategory;
      if(cat == "lol" || cat == "csgo") {
        return "ESPORTS"
      }
      return cat;
    }
    if (category === "esports") {
      return "ESPORTS";
    }
    return categories.find(c => c.key === category)?.label;
  };

  return (
    <div className="space-y-6 mb-10">
      {/* Barre de navigation des catégories */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="inline-flex flex-col sm:flex-row border border-border rounded-lg overflow-hidden bg-bgColor2 shadow-sm">
            {categories.map((cat, index) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base ${
                  index > 0 ? 'border-t sm:border-t-0 sm:border-l border-border/50' : ''
                } ${
                  category === cat.key
                    ? 'bg-button '
                    : 'bg-bgColor2  hover:bg-button'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des articles */}
      <div className="space-y-6">
        {articles.length === 0 ? (
          <div className="text-center border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button w-auto mx-auto">
            <p>Aucun article trouvé pour cette catégorie.</p>
          </div>
        ) : (
          articles.slice(0, visibleArticles).map((article, index) => (
            <a 
              key={index} 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block border border-border rounded-lg p-6 hover:shadow-md transition flex md:flex-row flex-col items-start gap-6 md:w-3/4 w-full mx-auto bg-bgColor2 hover:bg-bgColor2/90"
            >
              {/* Section image si disponible */}
              {article.enclosure?.url && (
                <div className="md:w-1/4 w-full">
                  <img 
                    src={article.enclosure.url} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              )}
              
              <div className={`${article.enclosure?.url ? 'md:w-3/4' : 'w-full'} flex flex-col h-full`}>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-button transition-colors duration-300 flex items-center gap-2">
                    {article.title}
                    <IoMdOpen className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-lg text-sm border border-border bg-bgColor">
                      {getCategoryLabel(article)}
                    </span>
                    
                    {(category === "all" || category === "esports") && 
                     (article.originalCategory === "lol" || article.originalCategory === "csgo") && (
                      <span className={`px-2 py-1 rounded-lg text-sm ${gameBadges[article.originalCategory]?.color || 'bg-gray-500'}`}>
                        {gameBadges[article.originalCategory]?.label}
                      </span>
                    )}
                    
                    <span className="text-sm ">
                      {new Date(article.pubDate).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  
                  {article.contentSnippet && (
                    <p className="text-left  whitespace-pre-line">
                      {article.contentSnippet}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))
        )}
      </div>

      {visibleArticles < articles.length && (
        <div className="text-center mt-6">
          <button 
            onClick={loadMoreArticles}
            className="px-6 py-2 bg-button rounded-lg hover:bg-hover transition-all duration-300"
          >
            Afficher plus d'articles
          </button>
        </div>
      )}
    </div>
  );
};

export default ActusWindow;