import { backgroundColor } from "../recoil"
import styles from "./Button.module.scss"
import { useRecoilState } from "recoil"
import { FC } from "react"

const ChangeThemeButton: FC = (): React.ReactElement => {
    const [theme, setTheme] = useRecoilState(backgroundColor)

    const getNextTheme = () => theme === "light" ? "dark" : "light"

    const onToggle = () => {
        setTheme(getNextTheme)
    }

    return (
        <button onClick={onToggle} className={styles['button-container']}>Switch Theme to {getNextTheme()}</button>
    )
}
export default ChangeThemeButton