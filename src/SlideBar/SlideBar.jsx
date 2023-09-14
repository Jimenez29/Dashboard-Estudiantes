import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtonNav from '../ButtonNav/ButtonNav';
import './SlideBar.css';

function SlideBar(){
    return(
        <div className="container-fluid" >
            <div className="row">
                <div className="col-auto min-vh-100 bg-secondary">
                    <ul>
                        <li>
                            <a id="logo" className="nav-link px-2">
                                <i class="bi bi-book"/>
                                <span className="ms-1 d-none d-sm-inline">FUNREAD</span>
                            </a>
                        </li>
                        <li>
                            <ButtonNav title='My Library'></ButtonNav>
                        </li>
                        <li>
                            <ButtonNav title='Shared Library'></ButtonNav>
                        </li>
                        <li>
                            <ButtonNav title='My Groups'></ButtonNav>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SlideBar;