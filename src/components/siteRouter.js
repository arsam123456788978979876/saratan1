import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutUs from '../pages/aboutUs';
import ContactUs from '../pages/contactUs';
import SignIn from '../pages/signIn/signIn';

const mulitiPage = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/about-us",
            element:<AboutUs/>
        },
        {
            path:"/contact-us",
            element:<ContactUs/>
        },
        {
            path:"/sing-in",
            element:<SignIn/>
        }
    ]
)
export default function SiteRouter() {
    return(
        <RouterProvider router={mulitiPage} />
    )
}