import { Button } from "@mui/material";
import { Colors } from "../../config";
import { changeShade } from "../../helpers";
import AddIcon from "@mui/icons-material/Add";

export const TopButton = (props) => {
  return (
    <Button
      variant="contained"
      onClick={props.onClick}
      sx={{
        backgroundColor: Colors.lightGray,
        display: "flex",
        flexDirection: "column",
        color: "#040404",
        height: props.height,
        width: props.width,
        fontSize: "20px",
        fontWeight: "500",
        borderRadius: "20px",
        textTransform: "unset",

        boxShadow: "none",
        "&:hover": {
          backgroundColor: changeShade(Colors.lightGray, -10),
        },
        filter: "drop-shadow(6px 4px 6px #00000005)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AddIcon fontSize="large" opacity="55%" />
        <p style={{ opacity: "55%", fontSize: "20px", fontWeight: "500" }}>
          {props.label}
        </p>
      </div>
    </Button>
  );
};
