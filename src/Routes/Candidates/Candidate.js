import { Drawer, DrawerItem } from "../../Components/Drawer/Drawer";
import { OutlinedButton } from "../../Components/Common/OutlinedButton";
import { Button } from "../../Components/Common/Button";
import { Colors } from "../../config";
import { Icon } from "../../Components/Common/Icon";
import { CandidateDashboard } from "./CandidateDashboard";
import { Routes, Route } from "react-router-dom";
import styles from "./Candidate.module.css";

export const Candidate = () => {
  return (
    <>
      <Drawer
        footer={
          <>
            <OutlinedButton
              color={Colors.trueWhite}
              borderColor={Colors.trueWhite}
              label="Credits: 944"
              style={{ padding: 0, height: "70px" }}
            />
            <Button
              label={"Sign Out"}
              color={Colors.primary}
              style={{
                borderRadius: "8px",
                fontSize: "1.375rem",
                padding: 0,
                marginBottom: 0,
                height: "70px",
              }}
            />
          </>
        }
      >
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/dashboard.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="dashboard"
          label="Dashboard"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/questions.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="questions"
          label="Profile Questions"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/billing.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="billings"
          label="Billing & Payments"
        />
      </Drawer>
      <div className={styles.candidateContainer}>
        <Routes>
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="billings" element={<CandidateDashboard />} />
          <Route path="questions" element={<CandidateDashboard />} />
          {/* <Route path="/profiles/*" element={<Navigate to="edit" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        </Routes>
      </div>
    </>
  );
};
