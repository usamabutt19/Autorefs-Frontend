import { Routes, Route } from "react-router-dom";
import { ApplicantForm } from "../Applicants/ApplicantForm";
import { DashboardRoot } from "../Dashboard/DashboardRoot";
import { Profiles } from "../Profiles/Profiles";
import { RefereeForm } from "../Referees/RefereeForm";
import { Candidate } from "../Candidates/Candidate";
import { RefereeRoot } from "../Referees/RefereeRoot";

export const AppRoot = ({ setCurrentPlan, setUpdatePassword }) => {
  return (
    <Routes>
      <Route path="/candidate/*" element={<Candidate />} />
      <Route path="/applicant/*" element={<ApplicantForm />} />
      <Route path="/referee/*" element={<RefereeForm />} />
      <Route
        path="/profiles/*"
        element={
          <Profiles
            setCurrentPlan={setCurrentPlan}
            setUpdatePassword={setUpdatePassword}
          />
        }
      />
      <Route path="*" element={<DashboardRoot />} />
    </Routes>
  );
};
