import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';
import { SignUp } from './SignUp';

export const LoginRoot = ({ loginHandler }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login loginHandler={loginHandler} />} />
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
