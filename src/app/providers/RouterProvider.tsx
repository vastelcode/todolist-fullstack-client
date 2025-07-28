import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

export const RouterApp = () => {
  return <RouterProvider router={router}/>;
}