import Box from '@mui/material/Box';
import { Colors } from '../../config';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const ChangesBox = ({ label, link }) => {
  return (
    <Fade duration={400}>
      <Link
        to={window.location.pathname + link}
        relative
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10rem",
            borderRadius: "20px",
            marginTop: "20px",
            backgroundColor: Colors.trueWhite,
            color: Colors.trueBlack,
            fontSize: "23px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(6px 4px 6px #00000005)",
            "&:hover": {
              backgroundColor: Colors.primary,
              color: Colors.trueWhite,
            },
            cursor: "pointer",
          }}
        >
          <p>{label}</p>
        </Box>
      </Link>
    </Fade>
  );
};
