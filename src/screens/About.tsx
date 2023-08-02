import { useState } from "react"
import { DataModel, ScreenProps } from "../types"
import { description, descriptionDetails, serviceItems, technologiesItems } from "../utils"
import Modal from "./Modal"

const About = ({ active }: ScreenProps) => {

    const [visible, setVisible] = useState(false)
    const [data, setData] = useState<DataModel>(technologiesItems[0])

    return (
        <article
            style={{ padding: "30px" }}
            className={active === "About" ? "navbar-link  active" : "navbar-link"}
            data-page="about">

            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>{description}</p>
                <p>{descriptionDetails}</p>
            </section>

            <section className="service">

                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                    {serviceItems.map(service =>
                        <li className="service-item" key={service.title}>
                            <div className="service-icon-box">
                                <img src={service.image} alt="design icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.text}</p>
                            </div>
                        </li>
                    )}
                </ul>

            </section>

            <section className="testimonials">

                <h3 className="h3 testimonials-title">Most used Technologies</h3>

                <ul className="testimonials-list has-scrollbar">
                    {technologiesItems.map(technology =>
                        <li key={technology.title}
                            onClick={() => {
                                setVisible(true)
                                setData(technology)
                            }}
                            className="testimonials-item"
                        >
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src={technology.image} alt={technology.title} />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>{technology.title}</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>{technology.description}</p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </section>

            <Modal visible={visible} setVisible={setVisible} data={data} />
        </article>)
}

export default About