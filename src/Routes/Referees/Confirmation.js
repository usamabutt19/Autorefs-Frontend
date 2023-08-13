import styles from "./Referee.module.css";
import { DashHeader } from "../../Components/Common/DashHeader";
import { Button } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const Confirmation = ({ move }) => {
  return (
    <>
      <DashHeader title="Referee Request" subtitle="" />
      <div className={styles.confirmationContainer}>
        <div>
          <p>Hello,</p>
          <br />
          <p>
            Alexander's has requested a reference via AutoRefs for Tom Sharpe
            who claims to have known you between 21/09/2018 and 04/07/2021 .
          </p>
          <br />
          <p>
            It would be appreciated if you could please spend a few minutes
            completing their reference now.
          </p>
          <br />
          <p>
            I agree that the information I provide must be accurate and may be
            disclosed to a third party such as the person to whom this reference
            applies. I accept the Terms and Conditions. Read our Privacy Policy.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "70px",
            marginBottom: "40px",
          }}
        >
          <Button
            onClick={() => {
              move("next");
            }}
            sx={{
              backgroundColor: Colors.primary,
              color: Colors.trueWhite,
              width: "300px",
              height: "70px",
              borderRadius: "6px",
              textTransform: "unset",
              fontSize: "22px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: changeShade(Colors.primary, -10),
              },
            }}
          >
            <strong>Complete Reference</strong>
          </Button>
          <Button
            sx={{
              backgroundColor: Colors.lightBlack,
              color: Colors.trueWhite,
              width: "300px",
              height: "70px",
              borderRadius: "6px",
              textTransform: "unset",
              fontSize: "22px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: changeShade(Colors.lightBlack, -10),
              },
            }}
          >
            <strong>Reject Reference</strong>
          </Button>
        </div>
      </div>
    </>
  );
};
