import styles from "./Applicant.module.css";
import { Button } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const Confirmation = ({ move }) => {
  return (
    <>
      <div>
        <p
          style={{
            fontSize: "40px",
            margin: "0",
            fontFamily: "Roboto Black",
          }}
        >
          Reference request from Opentech
        </p>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.confirmationContainer}>
          <div
            style={{
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            <p>Hi John,</p>

            <p>
              Opentech has requested 2 references for your application via
              AutoRefs. Please provide the referee details so we can proceed
              with your application.
            </p>
            <br />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(236, 236, 236, 0.73)",
            padding: "30px",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <p style={{ fontWeight: "500" }}>Message from Opentech</p>
            <p>
              Hi, Please can you provide us with details of two employment
              related referees from who we can obtain references from. These
              should be from your last two employers and referees should not
              include friends or close relatives. Thank you an receiving an
              email back from you soon.
            </p>
          </div>
        </div>
        <br />
        <div className={styles.confirmationContainer}>
          <div
            style={{
              marginLeft: "30px",
            }}
          >
            <p>
              I agree that the information I provide must be accurate and may be
              disclosed to a third party such as the person to whom this
              reference applies. I accept the Terms and Conditions. Read our
              Privacy Policy.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginLeft: "60px",
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
            <strong>Add Reference</strong>
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
            <strong>Decline Request</strong>
          </Button>
        </div>
      </div>
    </>
  );
};
