import { ScreenProps } from "../types"
import { bookList } from "../utils"

const Bookshelf = ({ active }: ScreenProps) =>
    <article
        style={{ padding: "30px" }}
        className={active === "Bookshelf" ? "navbar-link  active" : "navbar-link"}
        data-page="blog">
        <header>
            <h2 className="h2 article-title">Bookshelf</h2>
        </header>

        <section className="blog-posts">

            <ul className="blog-posts-list">

                {bookList.map(book =>
                    <li className="blog-post-item" key={book.title}>
                        <a href="#">
                            <figure className="blog-banner-box">
                                <img src={book.image} alt={book.title} loading="lazy" />
                            </figure>

                            <div className="blog-content">

                                <div className="blog-meta">
                                    <p className="blog-category">{book.author}</p>
                                    <span className="dot"></span>
                                    <p className="blog-category">{book.category}</p>
                                </div>

                                <h3 className="h3 blog-item-title">{book.title}</h3>

                                <p className="testimonials-text">{book.description}</p>

                            </div>

                        </a>
                    </li>
                )}
            </ul>
        </section>
    </article>

export default Bookshelf