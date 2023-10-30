import { AppRoute } from "./Routes";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";
import Services from "../../pages/Services";
import Pricing from "../../pages/Pricing";
import Contact from "../../pages/Contact";
import AboutUs from "../../pages/AboutUs";
import Testing from "../../pages/Testing";
import Analysis from "../../pages/Analysis";

const routing = [
  {
    appRoute: AppRoute.HomePage,
    component: HomePage,
  },
  {
    appRoute: AppRoute.Services,
    component: Services,
  },
  {
    appRoute: AppRoute.Testing,
    component: Testing,
  },
  {
    appRoute: AppRoute.Pricing,
    component: Pricing,
  },
  {
    appRoute: AppRoute.Contact,
    component: Contact,
  },
  {
    appRoute: AppRoute.AboutUs,
    component: AboutUs,
  },
  {
    appRoute: AppRoute.Analysis,
    component: Analysis,
  },
  {
    appRoute: AppRoute.Page404,
    component: Page404
  }
];

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path="*" element={<Page404 />} ></Route>
        {routing.map((url, index) => {
          return (
            <Route
              path={url.appRoute}
              key={index + 1}
              element={<url.component />}
            ></Route>
          );
        })}
      </Route>
    </Routes>
  );
};
export default AppRouter;
