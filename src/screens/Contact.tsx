import IconFont from "../components/iconfont"
import { ScreenProps } from "../types"

const Contact = ({ active }: ScreenProps) =>
    <article data-page="contact"
        style={{ padding: "30px" }}
        className={active === "Contact" ? "navbar-link  active" : "navbar-link"}>

        <header>
            <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" >
            <figure>
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Cesena,+FC,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    width="400" height="300" loading="lazy"></iframe>
            </figure>
        </section>

        <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form">
                <div className="input-wrapper">
                    <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                    <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                </div>
                <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input />
                <button className="form-btn" type="submit" data-form-btn>
                    <span>Send Message</span>
                    <IconFont name="submit" color={"hsl(45, 54%, 58%)"} />
                </button>
            </form>
        </section>
    </article>

export default Contact