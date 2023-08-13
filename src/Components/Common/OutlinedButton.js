import { Button } from '@mui/material';

export const OutlinedButton = ({
  leftImg,
  borderColor,
  color,
  label,
  style,
  onClick,
}) => (
  <Button
    variant="outlined"
    size="large"
    fullWidth={true}
    onClick={onClick}
    sx={{
      ":hover": {
        borderColor: borderColor,
        borderWidth: "2px",
        backgroundColor: borderColor + "0a", //for transparency
      },
      fontSize: "1.125em",
      borderRadius: "8px",
      height: "62px",
      borderWidth: "2px",
      borderColor: borderColor,
      color: color,
      textTransform: "unset",
      fontWeight: "700",
      ...(!!style && style),
    }}
  >
    {leftImg}
    {label}
  </Button>
);
