import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-blue navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button
                            class="btn"
                            type="button"
                            onClick={props.button}
                        >
                            <span class="fas fa-bars"></span>
                        </button>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link class="btn" to="/" role="button">
                            <i class="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
