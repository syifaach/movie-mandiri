import { Link, Outlet } from "react-router-dom"

function SideBar() {
    return (
        <>
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-light col-2 align-items-start" >
                    <div className="container-fluid flex-column">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/movie/list"><i className="fa-solid fa-ticket me-3"></i>Table Film</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/movie/insert"><i className="fa-solid fa-film me-3"></i>Input Film</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="col-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default SideBar