import styles from "./Referee.module.css";
import { DashHeader } from "../../Components/Common/DashHeader";
import { Button, TextField } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const Questions = ({ move }) => {
  return (
    <>
      <DashHeader title="Referee Request" subtitle="" />
      <div className={styles.questionsContainer}>
        <p style={{ fontSize: "28px", fontWeight: "500" }}>
          Please confirm reference for Tom Sharpe
        </p>
        <p>What were some of the candidate's responsibilities?</p>
        <TextField
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "8px",
            },
          }}
          multiline
          rows={4}
        />
        <p style={{ marginTop: "45px" }}>
          What are some of the candidate's strengths?
        </p>
        <TextField
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "8px",
            },
          }}
          multiline
          rows={4}
        />
      </div>
      <Button
        onClick={() => {
          move("next");
        }}
        sx={{
          backgroundColor: Colors.primary,
          color: Colors.trueWhite,
          marginTop: "40px",
          width: "240px",
          height: "65px",
          borderRadius: "6px",
          textTransform: "unset",
          fontSize: "20px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: changeShade(Colors.primary, -10),
          },
        }}
      >
        <strong>Submit</strong>
      </Button>
    </>
  );
};
