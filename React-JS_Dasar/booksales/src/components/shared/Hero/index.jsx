export default function Hero(){
    return (
        <>
            <div id="home" className="my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                            Discover Your Next Favorite Book Today
                        </h1>
                        <p className="lead">
                            Explore our vast collection of bestsellers, classics, and hidden gems. From fiction to non-fiction, we have something for every reader.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                            View Collection
                            </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                            About Us
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img
                        className="rounded-lg-3 img-fluid"
                        src="/images/book-hero.jpg"
                        alt="Books Display"
                        width="720"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}