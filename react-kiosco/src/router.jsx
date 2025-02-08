import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Inicio from './views/inicio';
import Login from './views/login';
import Register from './views/register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Inicio/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            }
        ]
    }
]);



export default router;