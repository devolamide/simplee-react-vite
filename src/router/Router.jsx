import { Routes, Route } from "react-router";
import Layout from "../components/Layout";
import FormPage from "../pages/Form/Form";
import App from "../pages/app/App";
import MainHeroPage from "../pages/Hero/Hero";
import BackendDataPage from "../pages/backend-data/BackendData";
import DataPage from "../pages/data/DataPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/hero" element={<MainHeroPage />} />
        <Route path="/backend-data" element={<BackendDataPage />} />
        <Route path="/data-page" element={<DataPage />} />
      </Route>
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}
