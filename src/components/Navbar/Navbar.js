import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoWhite from "../../assets/logo-gawein-white.svg";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-theme">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logoWhite} height="30" alt="" />
                    </Link>
                    <Link
                        class="btn btn-outline-light"
                        to="/user"
                        role="button"
                    >
                        <i class="fab fa-google me-2"></i> SIGN IN
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
