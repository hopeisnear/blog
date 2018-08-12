import sanity from 'utils/sanityProvider';

const query = `*[_type == "articleTeaser"] {
  image,
  title,
  slug,
  tags,
  publishedAt,
  body,
  'id': slug.current
}[0...50]
`;

const fetchArticleQuery = (slug) => `*[_type == "article" && teaser._ref in *[_type=="articleTeaser" && slug.current=="${slug}"]._id] {
  content,
  comments,
  teaser->,
  'id': teaser->slug.current,
  _id
}
`;

export function fetchArticles() {
  return sanity.fetch(query);
}

export function fetchArticle(articleSlug) {
  return sanity.fetch(fetchArticleQuery(articleSlug))
    .then((response) => {
      const [article] = response;
      return {
        content: article.content, comments: article.comments, id: article.id, ...article.teaser, _id: article._id,
      };
    });
}
