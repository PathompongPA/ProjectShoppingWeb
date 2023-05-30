import "./ComNavbar.css";
import { Link, Outlet } from "react-router-dom";
export default function NavBarApp(prop) {
  const title = prop.keys.map((prop) => {
    return prop.title;
  });
  // const url = prop.keys.map((prop)=>{
  //   return prop.path
  // })

  const titleleft = title.slice(0, 6);
  // const urlleft = url.slice(0,6);
  const titleright = title.slice(6);
  // const urlright = url.slice(8);
  return (
    <div id="box-navbarapp">
      <nav>
        <ul>
          <section id="left">
            {titleleft.map((prop) => {
              // console.log("in left "+prop[0].path)
              return (
                <Link to={prop} id={prop}>
                  {prop}
                </Link>
              );
            })}

            <div id="con"></div>
          </section>
          <section id="right">
            <div id="sellitems">
              <Link to="sellitem">
                <li>{titleright[0]}</li>
              </Link>
            </div>

            <li id="iconsell">
              <Link to={titleright[1]}>
                <span class="material-symbols-outlined">shopping_cart</span>
              </Link>
            </li>
          </section>
        </ul>
      </nav>
    </div>
  );
}
