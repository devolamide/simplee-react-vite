import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <sidebar></sidebar>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
