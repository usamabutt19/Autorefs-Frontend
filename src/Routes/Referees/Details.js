import styles from "./Referee.module.css";
import { DashHeader } from "../../Components/Common/DashHeader";
import { Button, TextField } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const Details = ({ move }) => {
  return (
    <>
      <DashHeader title="Referee Request" subtitle="" />
      <div className={styles.detailContainer}>
        <p style={{ fontSize: "28px", fontWeight: "500", marginBottom: "0" }}>
          Please complete the following details about yourself
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "45px",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="job-title" style={{ width: "350px" }}>
              Job Title
            </label>
            <TextField
              name="job-title"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="General Manager"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="contact" style={{ width: "350px" }}>
              Contact Number
            </label>
            <TextField
              name="contact"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="07833 977722"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="relationship" style={{ width: "350px" }}>
              Relationship with Applicant
            </label>
            <TextField
              name="relationship"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Colleague"
              style={{ opacity: "62%" }}
            />
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          move("next");
        }}
        sx={{
          backgroundColor: Colors.primary,
          color: Colors.trueWhite,
          width: "240px",
          height: "65px",
          marginTop: "50px",
          borderRadius: "6px",
          textTransform: "unset",
          fontSize: "20px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: changeShade(Colors.primary, -10),
          },
        }}
      >
        <strong>Save Details</strong>
      </Button>
    </>
  );
};
