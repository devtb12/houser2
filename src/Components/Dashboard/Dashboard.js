import React from 'react'
import { Link } from 'react-router-dom'

//Component
import House from '../House/House'

class Dashboard extends React.Component {
    // constructor() {
    //     super ()
    // }
    render () {
        return (
            <div>
                <div>
                    <ul>
                        <li>Dashboard</li>
                        <li><button><Link to='/wizard'>Add new Property</Link></button></li>
                    </ul>
                    </div>
                <House />
            </div>
        )
    }
}

export default Dashboard