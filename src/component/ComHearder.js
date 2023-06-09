import { Link, Outlet } from "react-router-dom";
import "./ComHearder.css";

export default function Brandner (prop) {
  const title = prop.keys.slice(1)
  return (
    <div id="box-hearder1">
      <div className="box-hearder2" id="Sellerlist">
            <Link to={prop.keys[0].path}>{prop.keys[0].title}</Link>
          </div>
      {title.map((prop) => {
        const title = prop.title
        const url = prop.path
        return (
          <div className="box-hearder2" id={url}>
            <Link to={url}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
}
