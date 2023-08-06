import ChangeThemeButton from "../components/ChangeThemeButton"
import { backgroundColor } from "../recoil"
import styles from "./dashboard.module.scss"
import { useRecoilState } from "recoil"
import { FC } from "react"

const Dashboard: FC = (): React.ReactElement => {
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