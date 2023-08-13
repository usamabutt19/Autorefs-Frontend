import { Grid, Button } from "@mui/material";
import { DashHeader } from "../../Components/Common/DashHeader";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";
import styles from "./Referee.module.css";

export const ThankYou = () => {
  return (
    <>
      <DashHeader title="Thank You" subtitle="" />
      <Grid container>
        <Grid item container xs={12} spacing={4}>
          <Grid item xs={6}>
            <div className={styles.thankyouContainer}>
              <p style={{ fontSize: "18px" }}>
                <strong>Wow!</strong> How easy was that! Why not deploy AutoRefs
                into [Company Name] to automate your reference collection
                process?
              </p>
              <ul className={styles.listStyle}>
                <li>Increase reference response rates</li>
                <li> Cut call time chasing references</li>
                <li> Improve due diligence on applications</li>
                <li> Hire Better candidates</li>
                <li> Personalise question profiles</li>
                <li> Customise reminder schedules</li>
                <li> Capture eSignature Consent</li>
                <li> Prevent application fraud</li>
                <li> Improve GDPR compliance</li>
                <li> Rolling subscription. Cancel anytime</li>
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
                <br />
                <br />
                Your response will help the new employer make an informed
                decision. Please kindly leave a review on any of the following
                platforms;
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
