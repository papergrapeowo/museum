import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ArtifactsPage } from "./components/ArtifactsPage";
import { ArtifactDetail } from "./components/ArtifactDetail";
import { AIChatPage } from "./components/AIChatPage";
import { GamesPage } from "./components/GamesPage";
import { PuzzleGame } from "./components/PuzzleGame";
import { GuessGame } from "./components/GuessGame";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "artifacts", Component: ArtifactsPage },
      { path: "artifacts/:id", Component: ArtifactDetail },
      { path: "chat", Component: AIChatPage },
      { path: "games", Component: GamesPage },
      { path: "games/puzzle", Component: PuzzleGame },
      { path: "games/guess", Component: GuessGame },
    ],
  },
]);
