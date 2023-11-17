import { useState } from "react"
import IconFont from "../components/iconfont"
import { ScreenProps } from "../types"
import { downloadPdfResume, experiencesItem, resumeItem } from "../utils"

const Resume = ({ active }: ScreenProps) => {
    const [visible, setVisible] = useState(false)

    return (
        <article
            style={{ padding: "30px" }}
            data-page="resume"
            className={active === "Resume" ? "navbar-link  active" : "navbar-link"}
        >
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IconFont name="education" size={24} color={"#006df0"} />
                    </div>

                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {resumeItem.map(item =>
                        <li className="timeline-item" key={item.title}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <p className="timeline-text">{item.description}</p>
                            <span>{item.time}</span>
                        </li>
                    )}
                </ol>

            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IconFont name="icexperience" size={24} color={"#006df0"} />
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    {experiencesItem.map(item =>
                        <li key={item.title} className="timeline-item">
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.time}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    )}
                </ol>
            </section>
            <section className="resume">
                <div className="service-item" style={{ justifyContent: "center" }}>
                    <div className="service-content-box">
                        <a href="#">
                            <h4 onClick={() => setVisible(true)}
                                onKeyDown={() => setVisible(true)}
                                className="h4 service-item-title"
                                style={{ textAlign: "center" }}>
                                Check full resume
                            </h4>
                        </a>
                        <a href="#">
                            <p onClick={downloadPdfResume}
                                onKeyDown={downloadPdfResume}
                                className="service-item-text"
                                style={{ textAlign: "center" }}>
                                Download resume
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            <div className={visible ? "modal-container active" : "modal-container"}  >
                <div className={visible ? "overlay active" : "overlay"}
                    onKeyDown={() => setVisible(false)}
                    onClick={() => setVisible(false)}
                />
                <section style={{ width: 1050, height: 680, }} className="testimonials-modal">
                    <button className="modal-close-btn" onClick={() => setVisible(false)}>
                        <IconFont name="close1" color={"white"} size={10} />
                    </button>
                    <object data="./assets/ResumeDallAra2023.pdf" type="application/pdf" width="100%" height="100%">
                    </object>
                </section>
            </div>
        </article>
    )
}
export default Resume