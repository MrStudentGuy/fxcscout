import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Error from './pages/error.tsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "@/components/navbar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Search from "@/pages/search.tsx";
import FTCTeam from "@/pages/FTCTeam.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/teams/ftc/:teamNumber",
        element: <FTCTeam />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <KindeProvider
            clientId="b3014c1883ee48a0bf46346ae1004d3a"
            domain="https://rogueware.kinde.com"
            redirectUri="http://localhost:5173"
            logoutUri="http://localhost:5173"
        >
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className={"flex flex-col"}>
                    <Navbar/>
                    <RouterProvider router={router}/>
                </div>
            </ThemeProvider>
        </KindeProvider>
    </StrictMode>,
)
