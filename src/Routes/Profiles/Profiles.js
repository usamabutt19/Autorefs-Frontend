import { Drawer, DrawerItem } from "../../Components/Drawer/Drawer";
import { OutlinedButton } from "../../Components/Common/OutlinedButton";
import { Button } from "../../Components/Common/Button";
import { Colors } from "../../config";
import { EditAccount } from "./EditAccount";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./Profiles.module.css";
import { UpdatePassword } from "../../Components/Popups/UpdatePassword";
import { Plan } from "../../Components/Popups/Plan";

export const Profiles = ({ setCurrentPlan, setUpdatePassword }) => {
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
        <DrawerItem link="edit" label="Edit Account" />
        <DrawerItem
          link="change"
          label="Change Password"
          onClick={() => setUpdatePassword(true)}
        />
        <DrawerItem
          link="billing"
          label="Billing"
          onClick={() => setCurrentPlan(true)}
        />
        <DrawerItem link="notifications" label="Notifications" />
      </Drawer>
      <div className={styles.profileContainer}>
        <Routes>
          <Route path="edit" element={<EditAccount />} />
          <Route path="change" element={<EditAccount />} />
          <Route path="billing" element={<EditAccount />} />
          <Route path="notifications" element={<EditAccount />} />
          {/* <Route path="/profiles/*" element={<Navigate to="edit" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        </Routes>
      </div>
    </>
  );
};
