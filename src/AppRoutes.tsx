import React from "react";
import { Routes, Route } from "react-router-dom";
import { urls } from "./helpers/urls";
import LoginView from "./views/LoginView";
import HomeView from "./views/homeView/HomeView";
import DetailView from "./views/DetailView";
import NotFoundView from "./views/NotFoundView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={urls.login} element={<LoginView />} />
      <Route path={urls.home} element={<HomeView />} />
      <Route path={urls.detail.pattern} element={<DetailView />} />
      <Route path={urls.notFound} element={<NotFoundView />} />
    </Routes>
  );
};

export default AppRoutes;
