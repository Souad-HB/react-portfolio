import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resume from "./pages/Resume/Resume.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
