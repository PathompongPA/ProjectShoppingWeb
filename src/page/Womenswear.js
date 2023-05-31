import ComLoading from "../component/ComLoading";
import { useState, useEffect } from "react";
import "./Womenswear.css";

export default function Womenswear() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4444")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setLoading(true);
      })
      .catch((err) => {
        console.log("it is error mas ; ", err.message);
      });
  }, []);
  console.log("posts value ::::::: ");
  console.log(posts.forurl);
  return (
    <div>
      <p>hot </p>
      {loading ? (
        <div id="box-womenswear">
          {posts.forurl.map((prop) => {
            console.log("in map !!!!!!!!!!!!!!! : ");
            console.log(prop.path);
            return (
              <div id="box-womenswear-content">
                <div id="box-womenswear-content-sub">{prop.path}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <ComLoading />
      )}
    </div>
  );
}
