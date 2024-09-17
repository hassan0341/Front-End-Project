import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../api";
import DeleteComment from "./DeleteComment";
import "../CSS/CommentCard.css";

function CommentsCard({ updateComments, user }) {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleID(article_id).then((commentData) => {
      const sortedComments = commentData.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setComments(sortedComments);
    });
  }, [article_id, updateComments]);

  const handleDelete = (comment_id) => {
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(updatedComments);
  };

  return (
    <section className="comment-section">
      <h2 className="com-title">Comments</h2>
      {comments.length === 0 ? (
        <p className="no-comments-msg">No comments here, yet 👀</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.comment_id} className="single-comment">
            <h3 className="user">User: {comment.author}</h3>
            <p className="comment">{comment.body}</p>
            {comment.author === user && (
              <DeleteComment
                comment_id={comment.comment_id}
                onDelete={handleDelete}
              />
            )}
          </div>
        ))
      )}
    </section>
  );
}

export default CommentsCard;
