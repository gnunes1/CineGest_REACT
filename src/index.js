import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/inter_web/inter.css";
import "./index.css";
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <App/>
    </RecoilRoot>,
    document.getElementById("root"),
);
