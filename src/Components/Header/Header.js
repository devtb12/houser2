import React from 'react'
import { Link } from 'react-router-dom'
import './../../styles/main.css'

//Component


class Header extends React.Component {
    // constructor() {
    //     super ()
    // }
    render () {
        return (
<div>
<ul>
    <li>
              <img height="100" src="http://icons.iconarchive.com/icons/double-j-design/super-mono-3d/128/home-icon.png" alt="housepng" />
              
              <Link to='/'>Houser</Link></li>
              
              </ul>
            </div>
        )
    }
}

export default Header