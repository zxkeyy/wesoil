import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import AboutPage from "./Pages/AboutPage/AboutPage";
import TechnologyPAge from "./Pages/TechnologyPage/TechnologyPage";
import DevicesPage from "./Pages/DevicesPage/DevicesPage";
import TeamPage from "./Pages/TeamPage/TeamPage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "platform", element: <></> },
      { path: "technology", element: <TechnologyPAge /> },
      { path: "devices", element: <DevicesPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "blog", element: <></> },
    ],
  },
]);

export default router;
