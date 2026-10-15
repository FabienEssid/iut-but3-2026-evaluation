import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import { MovieList } from "./pages/MovieList.tsx";
import { MovieDetails } from "./pages/MovieDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      throw redirect("/movies");
    },
  },
  {
    path: "/movies",
    children: [
      { index: true, element: <MovieList /> },
      { path: ":id", element: <MovieDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
