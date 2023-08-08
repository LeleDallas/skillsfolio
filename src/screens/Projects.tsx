import { useState } from "react"
import { DataProjectModel, ScreenProps } from "../types"
import IconFont from "../components/iconfont"
import { projects } from "../utils"
import ModalProjects from "./ModalProjects"

type Categories = "All" | "Mobile development" | "Applications" | "Web development"

const Projects = ({ active }: ScreenProps) => {

    const [selectedCategory, setSelectedCategory] = useState<Categories>("All")
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState<DataProjectModel>(projects[0])

    const checkActive = (category: Categories, currentStatus: Categories) => category === currentStatus ? "active" : ""

    const items = ["All", "Mobile development", "Applications", "Web development"]

    return (
        <article
            style={{ padding: "30px" }}
            className={active === "Projects" ? "navbar-link  active" : "navbar-link"}
            data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Projects</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

                    {items.map(item =>
                        <li key={item} className="filter-item">
                            <button
                                onClick={() => setSelectedCategory(item as Categories)}
                                className={checkActive(item as Categories, selectedCategory)}
                            >{item}
                            </button>
                        </li>)}
                </ul>


                <div className="filter-select-box">
                    <button className="filter-select" >
                        <div className="select-value" >Select category</div>
                        <div className="select-icon">
                            <IconFont name="see" />
                        </div>
                    </button>
                    <ul className="select-list">
                        {items.map(item =>
                            <li key={item} className="select-item">
                                <button
                                    onClick={() => setSelectedCategory(item as Categories)}
                                    className={checkActive(item as Categories, selectedCategory)}
                                >{item}
                                </button>
                            </li>)}
                    </ul>
                </div>

                <ul className="project-list">
                    {projects.map(project =>
                        <li
                            onClick={() => {
                                setData(project)
                                setVisible(true)
                            }}
                            key={project.title} className="project-item  active">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IconFont name="see" size={24} color={"#006df0"} />
                                    </div>
                                    <img src={project.image} alt="finance" loading="lazy" />
                                </figure>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.tech}</p>
                            </a>
                        </li>
                    )}
                </ul>
                <ModalProjects visible={visible} setVisible={setVisible} data={data} />
            </section>
        </article>
    )
}

export default Projects