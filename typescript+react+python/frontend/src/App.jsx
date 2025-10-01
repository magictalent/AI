import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Todo from "./pages/Todo"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { getMe } from "./api"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (token) {
            getMe(token).then(res => {
                if (res.user) setUser(res.user)
                else {
                    setUser(null)
                    localStorage.removeItem("token")
                }
            })
        }
    }, [token])

    return (
        <>
            <div className="h-screen flex bg-gray-100 text-gray-800">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <Routes>
                        {!token || !user ? (
                            <>
                                <Route path="/login" element={<Login onLogin={setToken} />} />
                                <Route
                                    path="/register"
                                    element={<Register onRegistered={() => (window.location.href = "/login")} />}
                                />
                                <Route path="*" element={<Navigate to="/login" />} />
                            </>
                        ) : (
                            <>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/todo" element={<Todo />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </>

    )
}
