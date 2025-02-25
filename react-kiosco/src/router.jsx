import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Inicio from './views/inicio';
import Login from './views/login';
import Register from './views/register';
import AdminLayout from './layouts/AdminLayout';
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'

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
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Ordenes/>
            },
            {
                path: '/admin/productos',
                element: <Productos/>
            }
        ]
    }
]);



export default router;