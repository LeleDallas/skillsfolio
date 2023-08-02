import IconFont from "../components/iconfont"
import { ScreenProps } from "../types"

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
                    <IconFont name="education" size={24} color={"hsl(45, 54%, 58%)"} />
                </div>

                <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Alma Mater Studiorum, University of Bologna <br />
                        Second cycle degree/two year master in Computer Science and Engineering</h4>
                    <span>2021 — 2023</span>
                    <p className="timeline-text">---</p>

                </li>

                <li className="timeline-item">
                    <div className="timeline-content">
                        <h4 className="h4 timeline-item-title">Alma Mater Studiorum, University of Bologna<br />Bachelor in Computer Science and Engineering</h4>
                        <span>2018 — 2021</span>
                        <p className="timeline-text">---</p>
                    </div>
                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Technical Technological Diploma</h4>

                    <span>2013 — 2018</span>

                    <p className="timeline-text">---</p>

                </li>

            </ol>

        </section>

        <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <IconFont name="icexperience" size={24} color={"hsl(45, 54%, 58%)"} />
                </div>

                <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Creative director</h4>

                    <span>2015 — Present</span>

                    <p className="timeline-text">---</p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Art director</h4>

                    <span>2013 — 2015</span>

                    <p className="timeline-text">---</p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Web designer</h4>

                    <span>2010 — 2013</span>

                    <p className="timeline-text">---</p>

                </li>

            </ol>

        </section>

        <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Web design</h5>
                        <data value="80">80%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Graphic design</h5>
                        <data value="70">70%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Branding</h5>
                        <data value="90">90%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">WordPress</h5>
                        <data value="50">50%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                    </div>

                </li>

            </ul>

        </section>

    </article>
export default Resume