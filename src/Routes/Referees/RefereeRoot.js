import { Routes, Route, Navigate } from "react-router-dom";
import { RefereeForm } from "./RefereeForm";

export const RefereeRoot = () => {
  return (
    <Routes>
      <Route path="/referee" element={<RefereeForm />} />
      <Route path="*" element={<Navigate to="referee" replace />} />
    </Routes>
  );
};
