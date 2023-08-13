import styles from "./Referee.module.css";
import { DashHeader } from "../../Components/Common/DashHeader";
import { Button, TextField } from "@mui/material";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const ApplicantDetails = ({move}) => {
  return (
    <>
      <DashHeader title="Referee Request" subtitle="" />
      <div className={styles.applicantDetails}>
        <p style={{ fontSize: "28px", fontWeight: "500", marginBottom: "0" }}>
          Please Confirm Details
        </p>
        <p style={{ fontSize: "18px" }}>
          Please confirm the reference details below are correct for Tom Sharpe
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "45px",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="name" style={{ width: "260px" }}>
              Name
            </label>
            <TextField
              name="name"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Tom Sharpe"
              style={{ opacity: "62%" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="address" style={{ width: "260px" }}>
              Address
            </label>
            <TextField
              name="address"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="49 Netherpark Crescent, Steeple Ashton, BA14 4PZ"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="company-name" style={{ width: "260px" }}>
              Company Name
            </label>
            <TextField
              name="company-name"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Yesterday's Records"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="email" style={{ width: "260px" }}>
              Email
            </label>
            <TextField
              name="email"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="tom-sharpe@hotmail.com"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="number" style={{ width: "260px" }}>
              Number
            </label>
            <TextField
              name="number"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="07837 940813"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="since" style={{ width: "260px" }}>
              I have know them since
            </label>
            <TextField
              name="since"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="21 / 09 / 18"
              style={{ opacity: "62%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="to" style={{ width: "260px" }}>
              I have know them to
            </label>
            <TextField
              name="to"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="04 / 07 / 21"
              style={{ opacity: "62%" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "70px",
        }}
      >
        <Button
          onClick={() => {
            move("next");
          }}
          sx={{
            backgroundColor: Colors.primary,
            color: Colors.trueWhite,
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
          <strong>Comfirm</strong>
        </Button>
        <Button
          sx={{
            backgroundColor: Colors.lightBlack,
            color: Colors.trueWhite,
            width: "240px",
            height: "65px",
            borderRadius: "6px",
            textTransform: "unset",
            fontSize: "20px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: changeShade(Colors.lightBlack, -10),
            },
          }}
        >
          <strong>Edit</strong>
        </Button>
      </div>
    </>
  );
};
