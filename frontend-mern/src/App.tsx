import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/Theme-Provider";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/posts/post/:id",
        element: <PostDetails />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/update-post/:id",
        element: <EditPost />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
