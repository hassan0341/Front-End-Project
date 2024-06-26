import "../CSS/ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="article-card">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-topic">Topic: {article.topic}</p>
        <img
          className="card-image"
          src={article.article_img_url}
          alt="this article has no image, sorry :("
        />
        <p>Created at: {article.created_at}</p>
        <p>Comment count: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </section>
    </Link>
  );
}

export default ArticleCard;
