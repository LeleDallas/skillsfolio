import { useState } from "react"
import { ScreenProps } from "../types"
import IconFont from "../components/iconfont"

type Categories = "All" | "Web design" | "Applications" | "Web development"

const Portfolio = ({ active }: ScreenProps) => {

    const [selectedCategory, setSelectedCategory] = useState<Categories>("All")

    const checkActive = (category: Categories, currentStatus: Categories) => category === currentStatus ? "active" : ""

    const items = ["All", "Web design", "Applications", "Web development"]

    return (
        <article
            style={{ padding: "30px" }}
            className={active === "Portfolio" ? "navbar-link  active" : "navbar-link"}
            data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

                    {items.map(item =>
                        <li key={item} className="filter-item">
                            <button onClick={() => setSelectedCategory(item as Categories)} className={checkActive(item as Categories, selectedCategory)} data-filter-btn>{item}</button>
                        </li>)}
                </ul>

                <div className="filter-select-box">

                    <button className="filter-select" data-select>

                        <div className="select-value" data-select-value>Select category</div>

                        <div className="select-icon">
                            <IconFont name="see" />
                        </div>

                    </button>

                    <ul className="select-list">

                        <li className="select-item">
                            <button data-select-item>All</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web design</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Applications</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web development</button>
                        </li>

                    </ul>

                </div>

                <ul className="project-list">

                    {/* <li className="project-item  active" data-filter-item data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <IconFont name="see" size={24} color={"#006df0"} />
                                </div>

                                <img src="./assets/project-1.jpg" alt="finance" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Finance</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li> */}
                </ul>
            </section>
        </article>
    )
}

export default Portfolio