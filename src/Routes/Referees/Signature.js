import styles from "./Referee.module.css";
import { DashHeader } from "../../Components/Common/DashHeader";
import { Button, TextField, IconButton } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const Signature = ({ move }) => {
  return (
    <>
      <DashHeader title="Referee Request" subtitle="" />
      <div className={styles.signatureContainer}>
        <p style={{ fontSize: "25px", fontFamily: "Roboto Black" }}>
          Signature
        </p>
        <TextField
          variant="outlined"
          fullWidth
          label=""
          InputProps={{
            style: {
              borderRadius: "8px",
              alignItems: "baseline",
            },
            endAdornment: (
              <IconButton sx={{ fontSize: "12px", color: "#1E1F21" }}>
                {" "}
                Clear Signature
              </IconButton>
            ),
          }}
          multiline
          rows={8}
        />
        <Button
          sx={{
            backgroundColor: Colors.primary,
            color: Colors.trueWhite,
            marginTop: "30px",
            width: "300px",
            height: "70px",
            borderRadius: "6px",
            textTransform: "unset",
            fontSize: "22px",
            fontWeight: "700",
            "&:hover": {
              backgroundColor: changeShade(Colors.primary, -10),
            },
          }}
          onClick={() => {
            move("next");
          }}
        >
          <strong>Save Referee</strong>
        </Button>
      </div>
    </>
  );
};
