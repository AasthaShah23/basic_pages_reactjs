import React, { useState } from 'react'
import './ChangeMode.css'

function ChangeMode() {

    // const [Mode, setMode] = useState({
    //     backgroundColor: "white",
    //     color: "black",
    // });

    // const [p, setp] = useState({
    //     color: "rgb(110, 103, 103)",
    // });

    // const dark = () => {
    //     setMode({
    //         color: "white",
    //         backgroundColor: "black",
    //     })

    //     setp({
    //         color: 'white'
    //     })
    // }

    // const light = () => {
    //     setMode({
    //         backgroundColor: "white",
    //         color: "black",
    //     })
    //     setp({
    //         color: "rgb(110, 103, 103)",
    //     })
    // }

    const [count, setCount] = useState(0);

    const Count = () => {
        setCount({
            count : count + 1,
        })
        console.log(count);
    }

    // Count();

    return (
        <div>
            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" onClick={dark}>Dark mode</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={light}>Light Mode</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="main" style={Mode}>
                <div className="main-msg">
                    <h1>Grow your business
                        <h1>with us</h1>
                    </h1>
                    <p style={p} onClick={setp}>we are a team of talented designers making
                        <p>websites with bootstrap</p>
                    </p>
                    <button>Get Started</button>
                </div>
                <div className="main-img">
                    <img src="./image/HomePage.png" alt="" />
                </div>
            </div> */}

            <div className="main-text">
                <textarea name="text" id="" cols="40" rows="" placeholder='Enter anything whatever you want' onClick={Count}></textarea>
                <div className="main-count">
                    <table>
                        <tr>
                            <th>
                                <div className="count" >
                                    count
                                </div> 
                            </th>
                            <th>
                                <div className="preview">
                                    preview
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChangeMode
