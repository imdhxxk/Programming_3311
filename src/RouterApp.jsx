import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import CounterApp from './CounterApp.jsx'
import TodoListApp from './TodoListApp.jsx'

function LinkButtonPageApp() {
    const navigate = useNavigate();
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <Link to="/counterapp">Counter App</Link>
                </li>
                <li>
                    <Link to="/todolistapp">Todo List App</Link>
                </li>

                <li><button
                    onClick={() => navigate('/counterapp')}
                    >CounterApp</button></li>
                <li><button
                    onClick={() => navigate('/todolistapp')}
                    >TodoListApp</button></li>
            </ul>
        </>
    )
}
export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LinkButtonPageApp />} />
                <Route path="/counterapp" element={<CounterApp />} />
                <Route path="/todolistapp" element={<TodoListApp />} />
            </Routes>
        </BrowserRouter>
    )
}