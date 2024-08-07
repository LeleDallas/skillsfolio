import { useState } from "react"
import IconFont from "../components/iconfont"
import { ModalProjectProps } from "../types"

const ModalProjects = ({ visible, setVisible, data }: ModalProjectProps) => {
    const [overGithub, setOverGithub] = useState(false)
    const [overAndroid, setOverAndroid] = useState(false)
    const [overIos, setOverIos] = useState(false)
    return (
        <div className={visible ? "modal-container active" : "modal-container"}  >
            <div className={visible ? "overlay active" : "overlay"} onKeyDown={() => setVisible(false)} onClick={() => setVisible(false)} />
            <section style={{ width: 1050 }} className="testimonials-modal">
                <button className="modal-close-btn" onClick={() => setVisible(false)}>
                    <IconFont name="close1" color={"white"} size={10} />
                </button>
                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box" >
                        <img style={{ padding: 10, width: 350, borderRadius: 20 }} src={data.image} alt={data.title} />
                    </figure>
                    <div style={{ marginTop: 22, display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
                        <img src={`https://go-skill-icons.vercel.app/api/icons?i=${data.tech}&perline=5`} alt="tech" />
                        {data.url &&
                            <a href={data.url} target="_blank" className="social-link">
                                <IconFont
                                    style={{ marginRight: 5 }}
                                    color={overGithub ? "white" : "gray"}
                                    name={data.url.includes("github") ? "github" : "see"}
                                    size={48}
                                    onMouseOver={() => setOverGithub(true)}
                                    onMouseLeave={() => setOverGithub(false)} />
                            </a>}
                        {data.android &&
                            <a href={data.android} target="_blank" className="social-link">
                                <IconFont
                                    style={{ marginRight: 5 }}
                                    color={overAndroid ? "white" : "gray"}
                                    name={"Play-Store"}
                                    size={48}
                                    onMouseOver={() => setOverAndroid(true)}
                                    onMouseLeave={() => setOverAndroid(false)} />
                            </a>}
                        {data.ios &&
                            <a href={data.ios} target="_blank" className="social-link">
                                <IconFont
                                    style={{ marginRight: 5 }}
                                    color={overIos ? "white" : "gray"}
                                    name={"a-applestore"}
                                    size={48}
                                    onMouseOver={() => setOverIos(true)}
                                    onMouseLeave={() => setOverIos(false)} />
                            </a>}
                    </div>
                </div>
                <div className="modal-content">
                    <h4 className="h3 modal-title" >{data.title}</h4>
                    <time>{data.type}</time>
                    <div data-modal-text>
                        <p>{data.description}</p>
                    </div>
                </div>
            </section>
        </div>)
}

export default ModalProjects