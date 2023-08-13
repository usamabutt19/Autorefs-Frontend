import styles from "./Popups.module.css";
import { useState } from "react";
import { Divider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../config";
import { changeShade } from "../../helpers";
import { Fade } from "react-reveal";

export const Plan = ({ setCurrentPlan }) => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    setCounter(1);
  }
  return (
    <Fade duration={400}>
      <div className={styles.overlay}>
        <div className={styles.planPopup}>
          <div className={styles.planContent}>
            <p
              style={{
                fontSize: "40px",
                fontFamily: "Roboto Black",
              }}
            >
              Current Plan
            </p>
            <p style={{ fontSize: "18px", color: "#707070", opacity: "85%" }}>
              £50 x 1 License / per month
            </p>
            <Divider dark />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "20px",
                }}
              >
                <RemoveIcon
                  fontSize="8.5px"
                  opacity="85%"
                  style={{ cursor: "pointer" }}
                  onClick={decrementCounter}
                />
                {counter}
                <AddIcon
                  fontSize="8.5px"
                  opacity="85%"
                  style={{ cursor: "pointer" }}
                  onClick={incrementCounter}
                />
              </div>

              <p
                style={{
                  fontSize: "25px",
                  fontFamily: "Roboto Black",
                }}
              >
                Total: £{50 * counter}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
                gap: "1rem",
                justifyContent: "end",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  color: "#707070",
                  opacity: "47%",
                }}
                onClick={() => setCurrentPlan(false)}
              >
                Close
              </span>
              <Button
                sx={{
                  backgroundColor: Colors.primary,
                  color: Colors.trueWhite,
                  width: "200px",
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
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
