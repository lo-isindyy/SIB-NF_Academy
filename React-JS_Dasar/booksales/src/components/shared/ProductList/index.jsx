export default function ProductList(){
    return (
        <>
            <section id="books" className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Bestsellers This Month</h1>
                        <p className="lead text-body-secondary">
                            Our most popular titles that readers can't get enough of. 
                            From thrilling mysteries to heartwarming romances, discover what everyone's talking about.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 m-2">View All</a>
                            <a href="#" className="btn btn-secondary my-2">Other Book</a>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* Buku 1 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" alt="Atomic Habits Indonesia" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Atomic Habits</h5>
                                <p className="card-text">Panduan membentuk kebiasaan kecil untuk hasil luar biasa.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 110.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 2 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="Rich Dad Poor Dad Indonesia" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Rich Dad Poor Dad</h5>
                                <p className="card-text">Pelajaran keuangan dari dua sosok ayah yang berbeda.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 150.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 3 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548033656i/42861019.jpg" alt="Filosofi Teras" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Filosofi Teras</h5>
                                <p className="card-text">Filsafat Stoik untuk menghadapi hidup yang penuh drama.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 110.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 4 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg" alt="Sebuah Seni untuk Bersikap Bodo Amat" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Sebuah Seni untuk Bersikap Bodo Amat</h5>
                                <p className="card-text">Cara realistis menghadapi tekanan dan hidup lebih tenang.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 100.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 5 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://mojokstore.com/wp-content/uploads/2021/08/The-Psychology-of-Money.jpg" alt="Psychology of Money" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">The Psychology of Money</h5>
                                <p className="card-text">Pemahaman emosional dan psikologis dalam mengelola uang dengan bijak.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 99.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 6 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://ebooks.gramedia.com/ebook-covers/47877/image_highres/ID_SWW2019MTH06SWW.jpg" alt="Start With Why" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Start With Why</h5>
                                <p className="card-text">Menginspirasi pemimpin dan organisasi untuk memulai dengan "mengapa".</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 172.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 7 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://cdn.gramedia.com/uploads/items/IKIGAI.jpg" alt="Ikigai Indonesia" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Ikigai (Versi Indonesia)</h5>
                                <p className="card-text">Rahasia umur panjang dan hidup bermakna dari Jepang.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 205.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 8 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://store.tigaserangkai.com/wp-content/uploads/2022/10/16-COV-AAM-Tidur-Sendiri-19x24-eisbn.jpg" alt="Berani Tidur Sendiri" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Aku Berani Tidur Sendiri</h5>
                                <p className="card-text">Buku anak Indonesia yang membantu mengatasi rasa takut.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 92.000</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buku 9 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src="https://cdn.gramedia.com/uploads/items/9789792248616_negeri-5-menara-_cu-cover-baru_.jpg" alt="Negeri 5 Menara" className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title">Negeri 5 Menara</h5>
                                <p className="card-text">Kisah inspiratif pemuda pesantren yang menggapai mimpi besar.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-primary btn-outline-light">Buy</button>
                                        <button type="button" className="btn btn-sm btn-danger btn-outline-light">Favorite</button>
                                    </div> 
                                    <small className="text-body-secondary">Rp. 165.000</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}