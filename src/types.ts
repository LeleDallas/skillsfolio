import { IconNames } from "./components/iconfont"

export type ActiveNav = "About" | "Resume" | "Portfolio" | "Blog" | "Contact"

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
    purpose?: string
}

export interface ModalProps {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    data: DataModel
}

export interface SocialObject {
    url: string
    icon: IconNames
}
