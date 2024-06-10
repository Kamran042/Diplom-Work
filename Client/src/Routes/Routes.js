import Home from "../Pages/Site/Home/Home"
import Shop from "../Pages/Site/Shop/Shop"
import SiteRoot from "../Pages/Site/SiteRoot"

const ROUTES = [
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"/shop",
                element:<Shop/>,
            }
        ]
    }
]

export default ROUTES