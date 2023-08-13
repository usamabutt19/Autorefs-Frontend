import { Button, Grid } from "@mui/material";
import { changeShade } from "../../../helpers";
import { Colors } from "../../../config";
import styles from "./Drawer.module.css";

export const ApplicantData = ({ show }) => {
  return (
    <div
      className={styles.applicantSlider}
      style={{
        transform: show ? "none" : "translateX(100%)",
      }}
    >
      <div className={styles.innerContainer}>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <p style={{ fontSize: "30px", fontFamily: "Roboto Black" }}>
            <stong>Wendy R. Vasques</stong>
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              sx={{
                backgroundColor: Colors.primary,
                color: Colors.trueWhite,
                width: "155px",
                height: "45px",
                borderRadius: "10px",
                textTransform: "unset",
                fontSize: "15px",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: changeShade(Colors.primary, -10),
                },
              }}
            >
              Signature
            </Button>
            <Button
              sx={{
                backgroundColor: Colors.primary,
                color: Colors.trueWhite,
                width: "155px",
                height: "45px",
                borderRadius: "10px",
                textTransform: "unset",
                fontSize: "15px",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: changeShade(Colors.primary, -10),
                },
              }}
            >
              Office Notes
            </Button>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={{
                marginTop: "65px",
                marginLeft: "20px",
                marginRight: "20px",
                backgroundColor: "#F6F8F9",
                borderRadius: "20px",
                height: "315px",
                width: "525px",
              }}
            >
              <div style={{ padding: "35px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "17px", fontWeight: "700" }}>
                    <strong>Request Sent</strong>
                  </p>
                  <p style={{ fontSize: "14px" }}>01-06-2022, 4:15pm</p>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text.{" "}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: Colors.trueWhite,
                      borderRadius: "50%",
                      height: "55px",
                      width: "55px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        marginTop: "20px",
                      }}
                      src={require("../../../assets/icons/eyeIcon.svg").default}
                      alt={"eyeIcon"}
                    />
                  </span>
                  <p style={{ fontSize: "13px", marginLeft: "20px" }}>2 </p>
                  <span
                    style={{
                      backgroundColor: Colors.trueWhite,
                      marginLeft: "90px",
                      borderRadius: "50%",
                      height: "55px",
                      width: "55px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        marginTop: "17px",
                      }}
                      src={
                        require("../../../assets/icons/calendarIcon.svg")
                          .default
                      }
                      alt={"calendarIcon"}
                    />
                  </span>
                  <p style={{ fontSize: "13px", marginLeft: "20px" }}>
                    Reminders
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginTop: "25px",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: Colors.lightBlack,
                      color: Colors.trueWhite,
                      width: "155px",
                      height: "45px",
                      borderRadius: "10px",
                      textTransform: "unset",
                      fontSize: "15px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: changeShade(Colors.lightBlack, -10),
                      },
                    }}
                  >
                    Delivery Log
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: Colors.lightBlack,
                      color: Colors.trueWhite,
                      width: "155px",
                      height: "45px",
                      borderRadius: "10px",
                      textTransform: "unset",
                      fontSize: "15px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: changeShade(Colors.lightBlack, -10),
                      },
                    }}
                  >
                    Actions
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "65px",
                marginLeft: "20px",
                marginRight: "20px",
                backgroundColor: Colors.primary,
                borderRadius: "20px",
                height: "240px",
                width: "525px",
                color: Colors.trueWhite,
              }}
            >
              <div style={{ padding: "30px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    <strong>Request Completed</strong>
                  </p>
                  <p style={{ fontSize: "14px" }}>01-08-2022, 2:58pm</p>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text.{" "}
                </p>
                <Button
                  sx={{
                    backgroundColor: Colors.lightBlack,
                    marginTop: "15px",
                    color: Colors.trueWhite,
                    width: "155px",
                    height: "45px",
                    borderRadius: "10px",
                    textTransform: "unset",
                    fontSize: "15px",
                    fontWeight: "500",
                    "&:hover": {
                      backgroundColor: changeShade(Colors.lightBlack, -10),
                    },
                  }}
                >
                  Download
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
