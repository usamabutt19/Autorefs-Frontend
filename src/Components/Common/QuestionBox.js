import { Grid, Divider } from '@mui/material';
import { Colors } from '../../config';

export const QuestionBox = ({ title, subtitle }) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "20px",
        backgroundColor: Colors.trueWhite,
        marginTop: "25px",
        filter: "drop-shadow(6px 4px 6px #00000005)",
        padding: "45px",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "500" }}>{title}</p>
      <Grid container>
        <Grid item xs={6}>
          <p style={{ fontSize: "17px" }}>{subtitle}</p>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "20px", textAlign: "right" }}>
          <img
            src={require("../../assets/icons/questionBoxLogo1.svg").default}
            alt={"Logo-1"}
          />
          <img
            style={{
              marginLeft: "20px",
            }}
            src={require("../../assets/icons/questionBoxLogo2.svg").default}
            alt={"Logo-2"}
          />
        </Grid>
      </Grid>
      <Divider dark />
      <Grid container>
        <Grid item xs={6}>
          <p
            style={{
              color: Colors.primary,
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Answer
          </p>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Required</p>
        </Grid>
      </Grid>
    </div>
  );
};
