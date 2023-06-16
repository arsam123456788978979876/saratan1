import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
    
    function click() {
        let downClick = document.getElementById("downmenu")
        let width = document.getElementById("hamberger")
        
        width.classList.toggle("active2")
        downClick.classList.toggle("active")
    }

    return(
        
        <div className="header">
            <div className='wrapper'>
            <div id='downmenu'>
                <Link to="/contact-us">contactUs</Link>
                <Link to="">aboutUs</Link>

            </div>
                <div className='father'>
                        <div id='hamberger' onClick={click}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        
                    <div className='logo'>
                        <h1>arsams website</h1>
                    </div>
                    <div className='menu'>
                        <Link to="/sign-in">
                        <div><h3>Sing In</h3></div>
                        </Link>
                        <div><h3>movies</h3></div>
                    </div>
                </div>
                <div className='search-input'>
                        <input type='text' placeholder='type your movies name'></input>
                    </div>
            </div>
        </div>
        
    )
}