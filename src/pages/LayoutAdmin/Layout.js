import React, { useState } from "react";
import "../../assets/adminLTE/dist/css/adminlte.min.css";
// import "../../assets/adminLTE/dist/js/adminlte.min.js";
import Sidebar from "../../components/usercomponents/Sidebar/Sidebar";

function Layout(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <div className={open ? "sidebar-mini sidebar-collapse" : "sidebar-mini"}>
      <div className="wrapper">
        <Sidebar button={handleClick} activepage={props.activepage} />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0">{props.tittle}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">{props.children}</div>
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <strong>
            Copyright &copy; 2014-2021
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Layout;
