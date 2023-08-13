import Box from "@mui/material/Box";
import { Colors } from "../../config";

export const ButtonBox = ({ label, subLabel }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "5rem",
        borderRadius: "20px",
        marginTop: "20px",
        backgroundColor: Colors.trueWhite,
        color: Colors.trueBlack,
        fontSize: "18px",
        fontWeight: "500",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        cursor: "pointer",
        filter: "drop-shadow(6px 4px 6px #00000005)",
        "&:hover": {
          backgroundColor: Colors.primary,
          color: Colors.trueWhite,
        },
      }}
    >
      <p>{label}</p>
      <p>{subLabel}</p>
    </Box>
  );
};
