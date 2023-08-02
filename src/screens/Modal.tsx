import IconFont from "../components/iconfont"
import { ModalProps } from "../types"

const Modal = ({ visible, setVisible, data }: ModalProps) =>
    <div className={visible ? "modal-container active" : "modal-container"}  >
        <div className={visible ? "overlay active" : "overlay"} onClick={() => setVisible(false)}></div>
        <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={() => setVisible(false)}>
                <IconFont name="close1" color={"white"} size={10} />
            </button>
            <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                    <img style={{ padding: 10 }} src={data.image} alt={data.title} width="80" />
                </figure>
                <img src="./src/assets/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
                <h4 className="h3 modal-title" >{data.title}</h4>
                <time>{data?.purpose}</time>
                <div data-modal-text>
                    <p>{data.description}</p>
                </div>
            </div>
        </section>
    </div>

export default Modal