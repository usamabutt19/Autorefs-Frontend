import { Grid, Button } from "@mui/material";
import { DashHeader } from "../../Components/Common/DashHeader";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";
import styles from "./Applicant.module.css";

export const ThankYou = () => {
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
          Reference Successful
        </p>
      </div>
      <Grid container>
        <Grid item container xs={12} spacing={4}>
          <Grid item xs={6}>
            <div className={styles.thankyouContainer}>
              <p style={{ fontSize: "18px" }}>
                <strong>Wow!</strong> How easy was that! Why not create an
                account with AutoRefs so you can keep all your past references
                handy;
              </p>
              <ul className={styles.listStyle}>
                <div>
                  <li> Improve hiring chances</li>
                  <li> Free for applicants</li>
                  <li> Automated reminders</li>
                </div>
                <div>
                  <li> eSignature consent</li>
                  <li>PDF reference report</li>
                  <li> GDPR Compliant</li>
                </div>
              </ul>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "40px",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: Colors.lightBlack,
                    color: Colors.trueWhite,
                    width: "100%",
                    maxWidth: "315px",
                    height: "70px",
                    borderRadius: "6px",
                    textTransform: "unset",
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: changeShade(Colors.lightBlack, -10),
                    },
                  }}
                >
                  <strong>Get 5 reference credits</strong>
                </Button>
                <Button
                  sx={{
                    backgroundColor: Colors.primary,
                    color: Colors.trueWhite,
                    width: "100%",
                    maxWidth: "315px",
                    height: "70px",
                    borderRadius: "6px",
                    textTransform: "unset",
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: changeShade(Colors.primary, -10),
                    },
                  }}
                >
                  <strong>Signup Now</strong>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.thankyouContainer}>
              <p style={{ fontSize: "18px" }}>
                Thank you for completing this reference request.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "18px",
                  marginTop: "50px",
                }}
              >
                <img
                  src={require("../../assets/icons/capterraIcon.svg").default}
                  alt={"capterra-icon"}
                ></img>
                <p>Review us on Capterra</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "18px",
                  marginTop: "18px",
                }}
              >
                <img
                  src={require("../../assets/icons/g2Icon.svg").default}
                  alt={"g2-icon"}
                ></img>
                <p>Review us on G2</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "18px",
                  marginTop: "18px",
                }}
              >
                <img
                  src={require("../../assets/icons/trustpilotIcon.svg").default}
                  alt={"trustpilot-icon"}
                ></img>
                <p>Review us on Trust Pilot</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "18px",
                  marginTop: "18px",
                }}
              >
                <img
                  src={require("../../assets/icons/googleIcon.svg").default}
                  alt={"google-icon"}
                ></img>
                <p>Review us on Google</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
