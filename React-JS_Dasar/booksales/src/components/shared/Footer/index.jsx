export default function Footer() {
    return (
        <>
            <style>{`
                .footer-link {
                    position: relative;
                    color: #6c757d;
                    transition: color 0.3s ease;
                    text-decoration: none;
                }

                .footer-link::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 0%;
                    height: 2px;
                    background-color: #0d6efd;
                    transition: width 0.3s ease;
                }

                .footer-link:hover {
                    color: #0d6efd !important;
                }

                .footer-link:hover::after {
                    width: 100%;
                }
            `}</style>

            <footer className="bg-white border-top mt-5">
                <div className="d-flex" style={{ height: '3px' }}>
                    <div className="flex-grow-1 bg-primary"></div>
                    <div className="flex-grow-1 bg-success"></div>
                    <div className="flex-grow-1 bg-warning"></div>
                    <div className="flex-grow-1 bg-danger"></div>
                    <div className="flex-grow-1 bg-info"></div>
                </div>

                <div className="container py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="logo-container">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
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
                            <div className="ms-2">
                                <span className="fw-bold text-primary">Lois's</span>
                                <div className="text-secondary small">Bookstore</div>
                            </div>
                        </div>

                        <ul className="nav justify-content-center mb-0">
                            <li className="nav-item">
                                <a href="#home" className="nav-link px-3 footer-link fw-medium">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#books" className="nav-link px-3 footer-link fw-medium">Books</a>
                            </li>
                            <li className="nav-item">
                                <a href="#team" className="nav-link px-3 footer-link fw-medium">Team</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link px-3 footer-link fw-medium">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <p className="text-center text-secondary mb-0">&copy; 2025 Lois's Bookstore</p>
                </div>
            </footer>
        </>
    );
}
