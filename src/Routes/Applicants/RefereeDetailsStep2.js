import styles from "./Applicant.module.css";
import { Grid, Button } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const RefereeDetailsStep2 = ({ move }) => {
  return (
    <div className={styles.details2Container}>
      <p style={{ fontSize: "25px", fontFamily: "Roboto Black" }}>
        References List
      </p>
      <p style={{ fontSize: "18px" }}>
        Referee details saved! Please add 2 references as requested by the
        employer.
      </p>
      <Grid container spacing={5} sx={{ marginTop: "30px" }}>
        <Grid item xs={6}>
          <div
            style={{
              border: "0.5px solid #CFCFCF",
              borderRadius: "8px",
            }}
          >
            <div style={{ padding: "25px", marginLeft: "10px" }}>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                Referee Name / Relationship / Email
              </p>
              <p style={{ fontSize: "18px", opacity: "84%" }}>
                Name
                <br />
                Relationship
                <br />
                Email
                <br />
                Awaiting Reference
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              border: "0.5px solid #CFCFCF",
              borderRadius: "8px",
            }}
          >
            <div style={{ padding: "25px", marginLeft: "10px" }}>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                Date / Company / Job Title
              </p>
              <p style={{ fontSize: "18px", opacity: "84%" }}>
                01-01-20 to 01-01-2022
                <br />
                Company Name
                <br />
                Job Title
                <br />
                Edit Reference | Delete
              </p>
            </div>
          </div>
        </Grid>
        <Grid item container xs={12}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flex: 1,
            }}
          >
            <Button
              sx={{
                backgroundColor: Colors.lightBlack,
                color: Colors.trueWhite,
                width: "100%",
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
              <strong>Edit Referee</strong>
            </Button>
            <Button
              sx={{
                backgroundColor: Colors.lightBlack,
                color: Colors.trueWhite,
                width: "100%",
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
              <strong>Add Next Referee</strong>
            </Button>
            <Button
              onClick={() => {
                move("next");
              }}
              sx={{
                backgroundColor: Colors.primary,
                color: Colors.trueWhite,
                width: "100%",
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
              <strong>Done</strong>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
