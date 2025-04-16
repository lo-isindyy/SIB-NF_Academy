import { useState } from "react";
import booksData from "../../../Utils/books";

export default function ProductList() {
    const [books, setBooks] = useState(booksData);

    const extraBook = {
        id: books.length + 1, 
        title: "Hello",
        author: "Tere Liye",
        year: 2023,
        description: "Hello. Apakah kamu di sana? Aku tahu kamu di sana. Aku tahu kamu mendengarkan suaraku.",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/4/10/5cavrpibsar2kwtnhhbh7p.jpg" 
    };

    const handleClick = () => {
        const newBook = {
            ...extraBook,
            id: books.length + 1
        };
        setBooks([...books, newBook]);
        alert("Buku berhasil ditambahkan!");
    };

    return (
        <>
            <section id="books" className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Bestsellers This Month</h1>
                        <p className="lead text-body-secondary">
                            Our most popular titles that readers can't get enough of.
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {books.map((book) => (
                            <div key={book.id} className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="card-img-top p-3"
                                        style={{ height: "250px", objectFit: "contain" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <h6 className="card-text">{book.author}</h6>
                                        <p className="card-text">{book.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-primary">Buy</button>
                                                <button className="btn btn-sm btn-danger">Favorite</button>
                                            </div>
                                            <small className="text-body-secondary">{book.year}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <button className="btn btn-primary fw-bold" onClick={handleClick}>
                            Add a Book!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
