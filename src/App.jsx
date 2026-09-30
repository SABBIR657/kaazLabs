import React, { Suspense, lazy } from "react";
import { RouterProvider, useRouter } from "./router.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

// Only the home page ships in the first download; the others load when they're visited.
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

function Page() {
  const { path } = useRouter();
  if (path === "/") return <Home />;
  if (path === "/projects") return <ProjectsPage />;
  const match = path.match(/^\/projects\/([^/]+)$/);
  if (match) return <ProjectDetail key={match[1]} slug={decodeURIComponent(match[1])} />;
  return <NotFound />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen w-full overflow-x-clip">
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-screen bg-espresso" />}>
            <Page />
          </Suspense>
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
