import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function BackendData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    error: false,
    msg: "",
  });
  const loggedIn = false;

  useEffect(() => {
    let timer;

    const getData = async () => {
      try {
        timer = setTimeout(async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
          );
          if (!response.ok) throw new Error("Error occured");
          const responseBody = await response.json();
          setPosts(responseBody);
        }, 4 * 1000);
      } catch (error) {
        console.error(error);
        setError({
          msg: "An error occured " + error,
          error: true,
        });
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (error.error) {
    <div>{error.msg}</div>;
  }

  const componentMp = {
    input: <input type="text" />,
    radio: <input type="radio" />,
    checkbox: <input type="checkbox" />,
    number: <input type="number" />,
    date: <input type="date" />,
    color: <input type="color" />,
  };

  const value = "color";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {loggedIn && (
        <div>
          <h1>User is loggedIn</h1>
        </div>
      )}
      {loading ? (
        <div>
          <h1> The data is loading </h1>
        </div>
      ) : (
        posts.map((currPost) => <PostCard post={currPost} key={currPost.id} />)
      )}
      {componentMp[value]}
    </div>
  );
}
