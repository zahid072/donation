import { createBrowserRouter } from 'react-router-dom'

import Home from '../components/Home/Home'
import Layout from '../Layout/Layout'
import ErrorPage from '../components/ErrorPage/ErrorPage'


const Router = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            
            {
                path:"/donation",
                element:<div>Donation</div>
            },
            {
                path:"/statistics",
                element:<div>Statistics</div>
            },
        ]
    }
])

export default Router
