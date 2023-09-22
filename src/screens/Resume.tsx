import IconFont from "../components/iconfont"
import { ScreenProps } from "../types"
import { experiencesItem, resumeItem } from "../utils"

const Resume = ({ active }: ScreenProps) =>
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
        <figure className="project-img">
            <div className="project-item-icon-box">
                <IconFont name="see" size={24} color={"#006df0"} />
            </div>
        </figure>
    </article>
export default Resume