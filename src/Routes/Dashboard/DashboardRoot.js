import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Drawer, DrawerItem } from "../../Components/Drawer/Drawer";
import { Button } from "../../Components/Common/Button";
import { Colors } from "../../config";
import { OutlinedButton } from "../../Components/Common";
import styles from "./Dashboard.module.css";
import { Applicants } from "./Applicants";
import { ProfileQuestions } from "./ProfileQuestions";
import { TeamManagement } from "./TeamManagement";
import { Icon } from "../../Components/Common/Icon";
import { BulkChanges } from "./BulkChanges";
import { Billing_Payments } from "./BillingPayments";
import { Relationships } from "./BulkChanges/Relationships";
import { Designations } from "./BulkChanges/Designations";
import { References } from "./BulkChanges/References";
import { UpdatePassword } from "../../Components/Popups/UpdatePassword";
import { RequestForm } from "./SideDrawer/RequestForm";
import { useState } from "react";

export const DashboardRoot = () => {
  const [showRequest, setShowRequest] = useState(false);

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
              label={"Reference Request"}
              color={Colors.primary}
              style={{
                borderRadius: "8px",
                fontSize: "1.375rem",
                padding: 0,
                marginBottom: 0,
                height: "70px",
              }}
              onClick={() => {
                setShowRequest(true);
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
          link="/dashboard"
          label="Dashboard"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/applicants.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/applicants"
          label="Applicants"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/questions.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/questions"
          label="Profile Questions"
        />

        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/billing.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/billings"
          label="Billing & Payments"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/team.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/teams"
          label="Team Management
"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/bulk-change.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/changes"
          label="Bulk Changes
"
        />
        {/* <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/help.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/help"
          label="Help Centre
"
        />
        <DrawerItem
          Icon={
            <Icon
              src={require("../../assets/icons/integrations.svg").default}
              alt={"dashboard-item"}
            />
          }
          link="/integrations"
          label="Intergrations
"
        /> */}
      </Drawer>

      <div className={styles.dashContainer}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                showRequest={showRequest}
                setShowRequest={setShowRequest}
              />
            }
          />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/questions" element={<ProfileQuestions />} />
          <Route path="/teams" element={<TeamManagement />} />
          <Route path="/changes">
            <Route index element={<BulkChanges />} />
            <Route path="relationships" element={<Relationships />} />
            <Route path="designations" element={<Designations />} />
            <Route path="references" element={<References />} />
            <Route path="*" element={<Navigate to="/changes" replace />} />
          </Route>
          <Route path="/billings" element={<Billing_Payments />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </>
  );
};
