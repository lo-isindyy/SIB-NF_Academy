import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <style>{`
                .nav-link-animated {
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-link-animated::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0%;
                    height: 2px;
                    background-color: #0d6efd;
                    transition: width 0.3s ease;
                }

                .nav-link-animated:hover {
                    color: #0d6efd !important;
                }

                .nav-link-animated:hover::after {
                    width: 100%;
                }
            `}</style>

            <header className="sticky-top bg-white">
                <div className="container">
                    <nav className="navbar navbar-expand-lg py-2">
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <div className="logo-container">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="10" width="35" height="25" rx="2" fill="#4285F4" />
                                    <rect x="8" y="8" width="7" height="27" rx="1" fill="#EA4335" />
                                    <rect x="19" y="6" width="7" height="29" rx="1" fill="#FBBC05" />
                                    <rect x="30" y="7" width="7" height="28" rx="1" fill="#34A853" />
                                    <rect x="10" y="12" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="10" y="16" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="10" y="20" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="21" y="10" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="21" y="14" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="21" y="18" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="32" y="11" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="32" y="15" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="32" y="19" width="3" height="2" rx="0.5" fill="white" opacity="0.7" />
                                    <rect x="5" y="35" width="35" height="3" rx="1" fill="#1A73E8" opacity="0.5" />
                                </svg>
                            </div>
                            <div className="ms-3">
                                <span className="fw-bold fs-4 text-primary">Lois's</span>
                                <span className="d-block text-secondary">Bookstore</span>
                            </div>
                        </Link>

                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link nav-link-animated px-3 fw-medium">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/books" className="nav-link nav-link-animated px-3 fw-medium">Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/teams" className="nav-link nav-link-animated px-3 fw-medium">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contacts" className="nav-link nav-link-animated px-3 fw-medium">Contact</Link>
                                </li>
                            </ul>

                            <form className="d-flex me-3 position-relative">
                                <input
                                    className="form-control bg-light border-0 rounded-pill"
                                    type="search"
                                    placeholder="Search books..."
                                    aria-label="Search"
                                />
                                <button className="btn position-absolute end-0 top-0 bottom-0" type="submit">
                                    <i className="fa-solid fa-search text-primary"></i>
                                </button>
                            </form>

                            <div className="d-flex gap-2">
                                <Link to="/login" className="btn btn-outline-primary rounded-pill px-3">Login</Link>
                                <Link to="/register" className="btn btn-primary rounded-pill px-3">Register</Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="d-flex" style={{ height: '3px' }}>
                    <div className="flex-grow-1 bg-primary"></div>
                    <div className="flex-grow-1 bg-success"></div>
                    <div className="flex-grow-1 bg-warning"></div>
                    <div className="flex-grow-1 bg-danger"></div>
                    <div className="flex-grow-1 bg-info"></div>
                </div>
            </header>
        </>
    );
}
