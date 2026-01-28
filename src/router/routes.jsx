import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import IndexPage from "../pages/dashboard/IndexPage/IndexPage";
import CallLogs from "../pages/dashboard/callLogs/CallLogs";
import Appointment from "../pages/dashboard/appointments/Appointment";
import Settings from "../pages/dashboard/settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "call-logs",
        element: <CallLogs />,
      },
      {
        path: "appointments",
        element: <Appointment />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);