import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../../assets/logo-gawein-white.svg";
import user2 from "../../../assets/adminLTE/dist/img/user2-160x160.jpg";
import "./Sidebar.css";
import Navbar from "../Navbar/Navbar";

function Sidebar(props) {
    return (
        <>
            <Navbar button={props.button} />
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/user" className="brand-link">
                    <img
                        src={logoWhite}
                        alt="AdminLTE Logo"
                        className="brand-image"
                        style={{ opacity: 0.8 }}
                    />
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src={user2}
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <Link
                                    to="/user/"
                                    className={
                                        props.activepage === "beranda"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        Beranda
                                        {props.activepage === "beranda" ? (
                                            <i className="right fas fa-angle-right"></i>
                                        ) : null}
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/user/timeline"
                                    className={
                                        props.activepage === "timeline"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="nav-icon fas fa-stream"></i>
                                    <p>
                                        Timeline
                                        {props.activepage === "timeline" ? (
                                            <i className="right fas fa-angle-right"></i>
                                        ) : null}
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/user/posting"
                                    className={
                                        props.activepage === "posting"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="nav-icon fas fa-plus"></i>
                                    <p>
                                        Posting
                                        {props.activepage === "posting" ? (
                                            <i className="right fas fa-angle-right"></i>
                                        ) : null}
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/user/profil"
                                    className={
                                        props.activepage === "profil"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        Profil
                                        {props.activepage === "profil" ? (
                                            <i className="right fas fa-angle-right"></i>
                                        ) : null}
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
