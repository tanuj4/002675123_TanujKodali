import React from "react";
import "../Main/MainPage.css"
import {Link} from 'react-router-dom'

export default function MainPage(){
    return(
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/jobs'>Jobs</Link>
            </nav>
            <footer>
                <div>Starbucks &#169; 2019</div>
            </footer>
        </div>
    )
}