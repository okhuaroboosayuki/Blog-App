import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import Category from "./pages/category/Category.jsx";
import SingleCategory from "./pages/category/SingleCategory.jsx";
import Blog from "./pages/blog/Blog.jsx";
import SingleBlog from "./pages/blog/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/categories",
    element: <Category />
  },
  {
    path: "/categories/:categoryId",
    element: <SingleCategory />
  },
  {
    path: "/blogs",
    element: <Blog />
  },
  {
    path: "/blogs/:blogId",
    element: <SingleBlog />
  },
  {
    path: "*",
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
