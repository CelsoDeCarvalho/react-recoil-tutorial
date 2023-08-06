import ChangeThemeButton from "../components/ChangeThemeButton"
import { backgroundColor } from "../recoil"
import styles from "./dashboard.module.scss"
import { useRecoilState } from "recoil"

const Dashboard = () => {
    const [theme] = useRecoilState(backgroundColor)
    return (
        <div className={styles['dashboard-container']}>
            <div className={styles[theme]}>
                <ChangeThemeButton />
            </div>
        </div>
    )
}
export default Dashboard