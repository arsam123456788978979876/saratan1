import { useEffect } from 'react'
import '../SignIn/style.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
useEffect(() => {
    document.title="SingIn"
} , [])

    return(
 <>
 <div className='picture'>
     <div className='wrapper2'>
            <div className="signin">
                <div className="wrapper3">
                    <div className="title">
                        <h1>filling out the blanks</h1>
                    </div>
                    <div className="inputs-and-buttons">
                        <input type="text" placeholder=" username or email"></input>
                        <input type="text" placeholder=" password"></input>
                        <button>SignIn</button>
                        <h3>you dont have an account?<Link to="/sign-up">  creat an acount</Link></h3>
                    </div>
                </div>
             </div>
        </div>
</div>
 </>
    )
}