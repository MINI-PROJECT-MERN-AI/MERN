

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'
import Homepage from "./routes/Homepage/Homepage";
import RootLayout from "./layouts/rootLayout/RootLayout";
import Dashboardpage from "./routes/DashboardPage/Dashboardpage";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import ChatPage from "./routes/ChatPage/ChatPage";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path:"/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children:[
          {
          path:"/dashboard",
          element: <Dashboardpage />
          },
          {
            path:"/dashboard/chats/:id",
            element: <ChatPage />
          }

        ]
      }



    ]
    
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
