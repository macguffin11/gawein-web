import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./pages/LayoutAdmin/Layout";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user" exact>
                        <Layout tittle="Beranda" activepage="beranda" />
                    </Route>
                    <Route path="/user/timeline" exact>
                        <Layout tittle="Timeline" activepage="timeline" />
                    </Route>
                    <Route path="/user/posting" exact>
                        <Layout tittle="Posting" activepage="posting" />
                    </Route>
                    <Route path="/user/profil" exact>
                        <Layout tittle="Profil" activepage="profil" />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
