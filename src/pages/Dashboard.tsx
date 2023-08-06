import ChangeThemeButton from "../components/ChangeThemeButton"
import style from "./dashboard.module.scss"

const Dashboard = () => {
    return (
        <div className={style['dashboard-container']}>
            <ChangeThemeButton />
        </div>
    )
}
export default Dashboard