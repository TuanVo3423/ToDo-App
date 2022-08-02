import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import Login from './components/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AppTodo from './components/AppTodo';
import AppProvider from './context/AppProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route element={<Login />} path={'/login'}></Route>
                        <Route element={<AppTodo />} path={'/'}></Route>
                    </Routes>
                </AppProvider>
            </AuthProvider>
            ;
        </BrowserRouter>
    );
}

export default App;
