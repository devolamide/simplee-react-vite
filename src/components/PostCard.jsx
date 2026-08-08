import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-card-title">{post.title}</div>
      <div className="post-card-text">{post.body}</div>
    </div>
  );
}