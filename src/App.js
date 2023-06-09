import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Brandner from "./component/ComHearder";
import NavBarApp from "./component/ComNavbar";
import Footer from "./component/ComFooter";
import Playment from "./page/Playment";
import Womenswear from "./page/Womenswear";
import SingUp from "./page/SingUp";

//                       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  value  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ssss s
const Rawdata = [
  {
    titleNavbar: [
      { path: "Womenswear", title: "Womenswear" },
      { path: "Menswear", title: "Menswear" },
      { path: "Kidwear", title: "Kidwear" },
      { path: "Beauty", title: "Beauty" },
      { path: "Hobbies", title: "Hobbies" },
      { path: "Homeware", title: "Homeware" },
      { path: "Sellitem", title: "Sell item" },
      { path: "Playment", title: "Playment" },
    ],
    headers: [
      { path: "/", title: "Sellerlist" },
      { path: "Singup", title: "Sing up" },
      { path: "Login", title: "Log in" },
    ],
    forurl: [
      { path: "Playment", element: <Playment /> },
      { path: "SingUp", element: <SingUp /> },
      { path: "Womenswear", element: <Womenswear /> },
      { path: "Menswear", element: "Menswear" },
      { path: "Kidwear", element: "Kidwear" },
      { path: "Beauty", element: "Beauty" },
      { path: "Hobbies", element: "Hobbies" },
      { path: "Homeware", element: "Homeware" },
      { path: "Sellitem", element: "Sell item" },
      { path: "", element: "Sellerlist" },
      { path: "Login", element: "Log in" },
    ],
  },
];
//                       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  value  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ******************************************* LayoutNav1 start *******************************************
function LayoutNav1() {
  return (
    <div>
      <Brandner keys={Rawdata[0].headers} />
      <NavBarApp keys={Rawdata[0].titleNavbar} />
      <Outlet />
      <Footer />
    </div>
  );
}
// ******************************************* LayoutNav1 end *******************************************

// ******************************************* LayoutNav2 start *******************************************

function LayoutNav2() {
  return (
    <div id="layoutnav2">
      <Brandner keys={Rawdata[0].headers} />
      <Outlet/>
      
    </div>
  );
}

// ******************************************* LayoutNav1 end *******************************************

// ******************************************* app start  *******************************************

export default function App() {
  const rowmap = Rawdata[0].forurl.slice(2);
  console.log(` row map : ${Rawdata[0].forurl[0].path}`);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* *******************  layout 1 ********************* */}
          <Route path="/" element={<LayoutNav1 />}>
            {rowmap.map((prop) => {
              console.log(prop.path);

              let url = prop.path;
              let elements = prop.element;

              // let elements = prop.title;
              return <Route path={url} element={elements} />;
            })}
          </Route>


          {/* *******************  layout 2  ********************* */}
          <Route path="/" element={<LayoutNav2 />}>
            <Route path={Rawdata[0].forurl[0].path} element={<Playment />} />;
            <Route path={Rawdata[0].forurl[1].path} element={<SingUp />} />;

          </Route>



          {/* *******************  layout 3  ********************* */}

          <Route path="/" >
            <Route
              path={Rawdata[0].forurl[1].path}
              element={<SingUp />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// ******************************************* app end  *******************************************
