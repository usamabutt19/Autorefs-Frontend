import { Box } from '@mui/system';
import { Colors } from "../../config";
import { changeShade } from "../../helpers";

export const Card = ({ children, style, hoverColor, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "1rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: changeShade(hoverColor, -10),
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
