import {createBrowserRouter} from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/register'
import Home from '../src/features/interview/Home'
import Protected from './features/auth/components/Protected'


export const router = createBrowserRouter([
{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
},{
    path:"/",
    element:<Protected> <Home/> </Protected>
}
])