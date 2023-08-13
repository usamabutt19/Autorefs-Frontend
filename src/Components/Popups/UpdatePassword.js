import styles from "./Popups.module.css";
import { TextField, Button } from "@mui/material";
import { Colors } from "../../config";
import { changeShade } from "../../helpers";
import { Fade } from "react-reveal";

export const UpdatePassword = ({ setUpdatePassword }) => {
  return (
    <Fade duration={400}>
      <div className={styles.overlay}>
        <div className={styles.passwordPopup}>
          <div className={styles.passwordContent}>
            <p
              style={{
                fontSize: "36px",
                fontFamily: "Roboto Black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Update Password
            </p>
            <TextField
              label="Enter Current Password"
              variant="outlined"
              fullWidth
              style={{ opacity: "47%" }}
            />
            <TextField
              label="Enter New Password"
              variant="outlined"
              fullWidth
              style={{ opacity: "47%" }}
            />
            <TextField
              label="Confirm New Password"
              variant="outlined"
              fullWidth
              style={{ opacity: "47%" }}
            />
            <Button
              sx={{
                marginTop: "20px",
                backgroundColor: Colors.primary,
                color: Colors.trueWhite,
                height: "75px",
                borderRadius: "25px",
                textTransform: "unset",
                fontSize: "24px",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: changeShade(Colors.primary, -10),
                },
              }}
            >
              Update Password
            </Button>
            <span
              style={{
                cursor: "pointer",
                color: "#707070",
                opacity: "47%",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => setUpdatePassword(false)}
            >
              Close
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
};
