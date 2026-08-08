import "./App.css";
import MainHero from "../../components/Hero";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import SomethingElse from "../../components/HomePageButton";
import { AppDataContext as AppContext } from "../../context/AppDataContext";
import BackendData from "../../components/BackendData";
import { Spinner } from "../../components/Spinner";
import Form from "../../components/Form";

function App() {
  const cardData = [
    {
      name: "Frontend Development",
      text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
      cta: "Enroll before Friday.",
      title: "Build With Purpose",
      price: "₦15,000",
      url: "https://images.unsplash.com/photo-1681757265572-020257b75511?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://nairaland.com",
    },
    {
      name: "Backend Development",
      text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
      cta: "Enroll before Friday.",
      title: "Build With Purpose",
      price: "₦13,000",
      url: "https://picsum.photos/id/237/200/300",
      link: "https://google.com",
    },
    {
      name: "Product Development",
      text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
      cta: "Enroll before Friday.",
      title: "Build With Purpose",
      price: "₦12,333",
      url: "https://fastly.picsum.photos/id/1/5000/3333.jpg",
      link: "https://picsum.photos/",
    },
    {
      name: "Sales Development",
      text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
      cta: "Enroll before Friday.",
      title: "Build With Purpose",
      price: "₦20,000",
      url: "https://images.unsplash.com/photo-1681757265572-020257b75511?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.lipsum.com/",
    },
    {
      name: "Frontend Development",
      text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
      cta: "Enroll before Friday.",
      title: "Build With Purpose",
      price: "₦15,000",
      url: "https://picsum.photos/id/237/200/300",
      link: "https://www.lipsum.com/",
    },
  ];

  function updateCounter(name) {
    console.log("Welcome ", name);
  }

  return (
    <AppContext value={{ appName: "Class 26 App", version: "1.0" }}>
      <div className="app">
        <Layout>
          <MainHero />
          <div className="card-parent">
            {cardData.map((eachData, index) => (
              <Card cardData={eachData} key={index} />
            ))}
          </div>
          <SomethingElse updateCounter={updateCounter} />
          <BackendData />
          <Spinner />
          <Form />
        </Layout>
      </div>
    </AppContext>
  );
}

export default App;
