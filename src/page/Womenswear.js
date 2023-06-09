import ComLoading from "../component/ComLoading";
import { useState, useEffect } from "react";
import "./Womenswear.css";

export default function Womenswear() {



  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();



  useEffect(() => {
    fetch("http://localhost:4444")
      .then((res) => res.json())
      .then((data) => {
        console.log('wtf data :',data);
        setPosts(data[0]);
        setLoading(true);
      })
      .catch((err) => {
        console.log("it is error mas ; ", err.message);
      });
  }, []);




  console.log("posts value ::::::: ");
  console.log(posts);



//<<<<<<<<<<<<<<<<<<  start render part >>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div>
      {/* <p>hot </p> */}
      {loading ? (
        <div id="box-womenswear">
          {posts.titleNavbar.map((prop) => {
            console.log("in map !!!!!!!!!!!!!!! : ");
            console.log(prop.title);
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

//<<<<<<<<<<<<<<<<<<  end render part >>>>>>>>>>>>>>>>>>>>>>>>>



}
