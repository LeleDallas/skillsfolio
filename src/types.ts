import { IconNames } from "./components/iconfont"

export type ActiveNav = "About" | "Resume" | "Projects" | "Bookshelf" | "Contact"

export interface ScreenProps {
    active: ActiveNav
}

export interface NavbarProps {
    active: ActiveNav
    setActive: (arg: ActiveNav) => void
}

export interface DataModel {
    title: string
    description: string
    image: string
}

export interface ModalProps {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    data: DataModel
}

export interface DataProjectModel {
    title: string
    type: string
    description: string
    url?: string
    ios?: string
    android?: string
    image: string
    description2?: string
    tech?: Array<string>
}

export interface ModalProjectProps {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    data: DataProjectModel
}

export interface SocialObject {
    url: string
    icon: IconNames
}
export interface BookObject {
    title: string
    description: string
    category: string
    image: string
    author: string
    link?: string
}

export interface ResumeObject {
    title: string
    description: string
    time: string
}
