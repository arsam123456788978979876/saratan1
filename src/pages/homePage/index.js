import {Link} from'react-router-dom'
import { useEffect , useState } from 'react'


export default function HomePage() {
    const [counter , setCounter] = useState(1)
    useEffect( () => {
        document.title= "boat" + counter
    } , [counter]);

    function click() {
        setCounter(counter+1);
    }




    return (
        <>
        <button onClick={click}>sdsds</button>
        {counter}
        <Link to="/about-us" >
            <h1>about us</h1>
        </Link>
        <div>homePage</div>
        <Link to="/contact-us">
            <h2>contactUs</h2>
        </Link>

        
        </>
    )
}