import {React,useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
   const [btn, setbtn] = useState(false)
    return (
        <div className='headbar'>
           <button className='btn'onClick={()=>setbtn(!btn)}>=</button>
            <div className='logo'>{'<sachin soni>'}</div>
            <nav >
                <ul className={btn? 'navlist-mobile':'navlist'} >
                <Link to='/'><li>home</li></Link>
                <Link to='/project'><li>project</li></Link>
                <Link to='/about'><li>about</li></Link>
                <li>contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
