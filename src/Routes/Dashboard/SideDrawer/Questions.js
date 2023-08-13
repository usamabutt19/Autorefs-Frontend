import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, MenuItem } from "@mui/material";
import { Colors } from "../../../config";
import { changeShade } from "../../../helpers";
import styles from "./Drawer.module.css";

export const QuestionPopup = ({ show, setAddQuestion }) => {
  return (
    <div
      className={styles.questionPopup}
      style={{
        transform: show ? "none" : "translateX(100%)",
      }}
    >
      <div style={{ padding: "95px" }}>
        <div
          style={{
            marginTop: "135px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "25px", fontFamily: "Roboto Black" }}>
            Add Question
          </p>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setAddQuestion(false)}
          >
            <CloseIcon fontSize="large" sx={{ opacity: "41%" }} />
          </span>
        </div>
        <div style={{ marginTop: "50px" }}>
          <p style={{ fontSize: "18px", marginBottom: "0" }}>Select Question</p>
          <TextField
            variant="standard"
            fullWidth
            select
            InputProps={{
              disableUnderline: true,
            }}
            label="What were some of the candidate’s responsibilities?"
          >
            <MenuItem value="">
              What were some of the candidate’s responsibilities?
            </MenuItem>
          </TextField>
        </div>
        <div style={{ marginTop: "50px" }}>
          <p style={{ fontSize: "18px", marginBottom: "0" }}>Question Type</p>
          <TextField
            variant="standard"
            fullWidth
            select
            InputProps={{
              disableUnderline: true,
            }}
            label="Dropdown"
          >
            <MenuItem value="">Dropdown</MenuItem>
          </TextField>
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "0" }}>Required</p>
          <Checkbox
            sx={{
              color: "#CFCFCF",
            }}
          />
        </div>
        <Button
          sx={{
            marginTop: "50px",
            backgroundColor: Colors.primary,
            color: Colors.trueWhite,
            width: "15rem",
            height: "4rem",
            borderRadius: "6px",
            textTransform: "unset",
            fontSize: "18px",
            fontWeight: "700",
            "&:hover": {
              backgroundColor: changeShade(Colors.primary, -10),
            },
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
