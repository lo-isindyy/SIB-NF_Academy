export default function Team(){
    return (
        <>
            <div id="team" className="container px-4 py-5">
                <h2 className="pb-2 border-bottom text-align-center">Meet Our Team</h2>
                <p className="lead mb-0">The passionate book lovers behind Lois's Bookstore who are dedicated to connecting readers with their perfect next read.</p>
                
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    {/* Team Member 1 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/9e/b7/a3/9eb7a3152c18b9ec987ca250d28eb92e.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "200px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Lois Indy Pahlevi S.</h5>
                                <p className="card-text text-primary fw-bold">Founder & CEO</p>
                                <p className="card-text">A lifelong reader with a passion for connecting people with stories that can change their lives.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/e5/55/40/e555402af290cd801befb31f56adfa79.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "200px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Priyanka Indy Pahlevi S.</h5>
                                <p className="card-text text-primary fw-bold">Head of Operations</p>
                                <p className="card-text">With 15 years in book retail, David ensures our store runs smoothly while maintaining our curated selection.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/43/b8/f7/43b8f757efbe31ed48e6875165f3ee5d.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "200px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Ninusantara Pahlevi S.</h5>
                                <p className="card-text text-primary fw-bold">Literary Curator</p>
                                <p className="card-text">Our resident book expert with a PhD in Literature who carefully selects each title in our collection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
                    {/* Team Member 4 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/1d/3c/76/1d3c7631ef9647cdc76ad08bacc255ad.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "150px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Joshua Hong</h5>
                                <p className="card-text text-primary fw-bold">Fiction Specialist</p>
                                <p className="card-text">Our go-to person for finding your next fictional adventure.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/e4/fc/fd/e4fcfddaa1d3d462c928a73b8634a1c1.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "150px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Choi Soobin</h5>
                                <p className="card-text text-primary fw-bold">Children's Literature</p>
                                <p className="card-text">Former teacher with a passion for helping young readers grow.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 6 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/d2/14/f7/d214f79a4bc5958a83113424f28d4d60.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "150px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Choi San</h5>
                                <p className="card-text text-primary fw-bold">Non-Fiction Expert</p>
                                <p className="card-text">History buff and science enthusiast with impeccable recommendations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 7 */}
                    <div className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="py-3">
                                <img src="https://i.pinimg.com/736x/17/0f/36/170f36d8c80958b471e10624e67636f8.jpg" className="rounded-circle mb-3" alt="Team Member" style={{maxWidth: "100%", width: "150px", height: "auto", objectFit: "contain"}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Lee Heesung</h5>
                                <p className="card-text text-primary fw-bold">Events Coordinator</p>
                                <p className="card-text">The creative mind behind our author visits and reading clubs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}