import { Outlet } from "react-router";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <sidebar></sidebar>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
