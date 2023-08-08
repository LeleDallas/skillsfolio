import { useState } from "react"
import IconFont from "../components/iconfont"
import { ModalProjectProps } from "../types"


const ModalProjects = ({ visible, setVisible, data }: ModalProjectProps) => {

    const [over, setOver] = useState(false)
    return (
        <div className={visible ? "modal-container active" : "modal-container"}  >
            <div className={visible ? "overlay active" : "overlay"} onClick={() => setVisible(false)}></div>
            <section style={{ width: 1050 }} className="testimonials-modal">
                <button className="modal-close-btn" onClick={() => setVisible(false)}>
                    <IconFont name="close1" color={"white"} size={10} />
                </button>
                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box" >
                        <img style={{ padding: 10, width: 350 }} src={data.image} alt={data.title} />
                    </figure>
                    <a style={{ marginTop: 22 }} href={data.url} target="_blank" className="social-link">
                        <IconFont
                            color={over ? "white" : "gray"}
                            name={"github"}
                            size={22}
                            onMouseOver={() => setOver(true)}
                            onMouseLeave={() => setOver(false)} />
                    </a>
                    {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        {data.tech?.map((tecnology, key) =>
                            <img style={{ width: 35, height: 35, objectFit: "scale-down" }} key={key} src={tecnology} />
                        )}
                    </div> */}
                </div>
                <div className="modal-content">
                    <h4 className="h3 modal-title" >{data.title}</h4>
                    <time>{data.type}</time>
                    {/* <time>{data?.url2}</time>
                    <time>{data?.description2}</time> */}
                    <div data-modal-text>
                        <p>{data.description}</p>
                    </div>
                </div>
            </section>
        </div>)
}

export default ModalProjects