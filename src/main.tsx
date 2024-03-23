import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"
import Auth from "./pages/auth/Auth"
import Posts from "./pages/posts/Posts"
import { AuthGuard } from "./features/user/AuthGuard"
import { Layout } from "./components/layout/Layout"
import { CurrentPost } from "./pages/current-post/CurrentPost"
import { Followers } from "./pages/followers/Followers"
import { Following } from "./pages/following/Following"
import { UserProfile } from "./pages/user-profile/UserProfile"

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts/>,
      },
      {
        path: "posts/:id",
        element: <CurrentPost/>,
      },
      {
        path: "users/:id",
        element: <UserProfile/>,
      },
      {
        path: "followers",
        element: <Followers/>,
      },
      {
        path: "following",
        element: <Following/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthGuard>
          <RouterProvider router={router} />
        </AuthGuard>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)