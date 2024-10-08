import { deleteComment } from "../api";
import { useState } from "react";
import ErrorComponent from "./ErrorComponent";
import "../CSS/DeleteButton.css";

function DeleteComment({ comment_id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    setError(null);
    deleteComment(comment_id)
      .then(() => {
        onDelete(comment_id);
        setIsDeleting(false);
      })
      .catch(() => {
        setError("Failed to delete comment. Please try again.");
        setIsDeleting(false);
      });
  };

  return (
    <div>
      <button
        className="delete-button"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <ErrorComponent error={error} />}
    </div>
  );
}

export default DeleteComment;
