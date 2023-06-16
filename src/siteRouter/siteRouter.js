import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import ContactUs from '../pages/contactUs/contactUs';
const makeSite = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/sign-in",
            element:<SignIn/>
        },
        {
            path:"sign-up",
            element:<SignUp/>
        },
        {
            path:"contact-us",
            element:<ContactUs/>
        }

    ]
)
export default function SiteRouter() {
    return(
        <RouterProvider router={makeSite} />
    )
}