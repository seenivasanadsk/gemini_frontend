import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { NotificationProvider } from "./app/notify_context.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </Provider>
  </StrictMode>
);
