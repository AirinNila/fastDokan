import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/root/Root";
import Poperties from "../pages/Poperties";
import Page from "../pages/Page";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BecomeHost from "../pages/BecomeHost";
import Contact from "../pages/Contact";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/property',
                element: <Poperties></Poperties>
            },
            {
                path: '/becomehost',
                element: <BecomeHost></BecomeHost>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/page',
                element: <Page></Page>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Route;