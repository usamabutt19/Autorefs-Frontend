import { Colors } from '../../config';
import { changeShade } from '../../helpers';
import { Button as MUButton } from '@mui/material';

export const Button = ({ label, color, style, onClick }) => {
  return (
    <MUButton
      variant="contained"
      size="large"
      fullWidth={true}
      disableElevation
      onClick={onClick}
      sx={{
        ":hover": {
          borderColor: Colors.primary,
          backgroundColor: changeShade(color, -10),
        },
        backgroundColor: color,
        margin: "1rem 0rem",
        borderRadius: "25px",
        height: "76px",
        fontSize: "1.875rem",
        fontWeight: "700",
        textTransform: "unset",
        ...style,
      }}
    >
      {label}
    </MUButton>
  );
};
