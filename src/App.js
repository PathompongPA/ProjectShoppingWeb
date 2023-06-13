import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Brandner from "./component/ComHearder";
import NavBarApp from "./component/ComNavbar";
import Footer from "./component/ComFooter";
import Playment from "./page/Playment";
import Womenswear from "./page/Womenswear";
import SingUp from "./page/SingUp";
import Routing from "./Routing";

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
function LayoutNav2() {
  return (
    <div>
      <NavBarApp keys={Rawdata[0].titleNavbar} />
      <Outlet />
      <Footer />
    </div>
  );
}
// ******************************************* LayoutNav1 end *******************************************

// ******************************************* LayoutNav2 start *******************************************

function LayoutNav1() {
  return (
    <div id="layoutnav2">
      <Brandner keys={Rawdata[0].headers} />
      <Outlet/>
      
    </div>
  );
}

function LayoutNav3 () {
  return(
    <div id="layoutnav3">
      <Brandner keys={Rawdata[0].headers} />
      <NavBarApp keys={Rawdata[0].titleNavbar} />
      <Outlet/>
      <Footer></Footer>
    </div>
  )
  }
// ******************************************* LayoutNav1 end *******************************************

// ******************************************* app start  *******************************************

export default function App() {
  const rowmap = Rawdata[0].forurl.slice(2);
  console.log(` row map : ${Rawdata[0].forurl[0].path}`);
  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
  );
}
// ******************************************* app end  *******************************************
export {LayoutNav1,LayoutNav2,LayoutNav3}