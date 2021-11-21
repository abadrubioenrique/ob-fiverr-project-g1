import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
const navComponent = () => {
    return (
        
        <div className="navegacion">
        <nav className="nav nav-pills nav-fill">
        <div className="nav-item">
            <Link className="nav-link active route" to="/">Dashboard</Link>
            </div>
        <div className="nav-item">
            <Link className="nav-link active route" to="/add">Create a new project</Link>
        </div>
        </nav>
        </div>
        


    )
}
export default navComponent;
