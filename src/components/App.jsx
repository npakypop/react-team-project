import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/HomePage/HomePage';
import Home from './Home/Home';
import Diagram from './Diagram/Diagram';
import Currency from './Currency/Currency';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="diagram" element={<Diagram />} />
          <Route path="currency" element={<Currency />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <GlobalStyleComponent />
    </>
  );
};
