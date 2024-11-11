/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const lazyLoad = async (importStatement) => {
  let YourComponent = await import(importStatement);
  return { Component: YourComponent.default };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/orders",
        lazy: async () => lazyLoad("./page/Orders"),
      },
      {
        path: "/delivery",
        lazy: async () => lazyLoad("./page/Delivery"),
      },
      {
        path: "/party",
        lazy: async () => lazyLoad("./page/Party"),
      },
      {
        path: "/frequent",
        lazy: async () => lazyLoad("./page/Frequent"),
      },
    ],
  },
]);

export default router;
