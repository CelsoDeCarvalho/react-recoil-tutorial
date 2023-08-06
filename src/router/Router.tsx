import { Routes, HashRouter, Route, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import { FC } from "react"

const Router: FC = (): React.ReactElement => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </HashRouter>
    )
}
export default Router