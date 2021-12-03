import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout";
import { Page1 } from "./pages/page-1";
import { Page2 } from "./pages/page-2";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="page-1" element={<Page1 />} />
                        <Route path="page-2" element={<Page2 />} />
                        <Route path="/" element={<Navigate replace to="/page-1" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );                
    }
}

ReactDOM.render(<App />, document.getElementById("root"));