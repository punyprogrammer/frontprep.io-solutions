async function getTopArticles() {
  const articles = [];
  let currentPage = 1;

  while (true) {
    const response = await fetch(
      `https://www.frontprep.com/api/articles?page=${currentPage}`
    );

    const data = await response.json();

    const pageArticles = (data.articles ?? []).map((article) => {
      const { id, title, author } = article;

      const popularityScore =
        (article.likes ?? 0) +
        (Array.isArray(article.comments) ? article.comments.length : 0);

      return {
        id,
        title,
        author,
        popularityScore,
      };
    });

    articles.push(...pageArticles);

    if (!data.metadata?.nextPage) {
      break;
    }

    currentPage++;
  }

  articles.sort((a, b) => b.popularityScore - a.popularityScore);

  return articles.slice(0, 3);
}
