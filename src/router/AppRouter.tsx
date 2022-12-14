import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/auth' element={<AuthPage />}/>
            </Routes>
        </BrowserRouter>
    );
}