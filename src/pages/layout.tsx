import React from "react";
import { Outlet, Link } from "react-router-dom";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>A simple static web page template</h1>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                    >
                    <Link to="/page-1">Page 1</Link> |{" "}
                    <Link to="/page-2">Page 2</Link>
                </nav>
                <Outlet />
            </div>
        );
    }
}
