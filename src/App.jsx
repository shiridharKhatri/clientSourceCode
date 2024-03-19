import Allvideo from "./routes/Allvideo";
import Donor from "./routes/Donor";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/Contact";
import Root from "./routes/root";
import Volreg from "./routes/Volreg";
import News from "./routes/News";
import About from "./routes/About";
import Project from "./routes/Project";
import Gallery from "./routes/Gallery";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/donor",
      element: <Donor />,
    },
    {
      path: "/gallery",
      element:<Gallery/>,
    },
    {
      path: "/video",
      element: <Allvideo />,
    },
    {
      path: "/volreg",
      element: <Volreg />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
