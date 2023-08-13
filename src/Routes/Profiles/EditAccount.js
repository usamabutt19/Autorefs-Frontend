import { DashHeader } from '../../Components/Common/DashHeader';
import styles from './Profiles.module.css';
import { Button, TextField } from '@mui/material';
import { Colors } from '../../config';
import { changeShade } from '../../helpers';
import { Fade } from 'react-reveal';

export const EditAccount = () => {
  return (
    <>
      <DashHeader title="Edit Account" subtitle="" />
      <Fade duration={400}>
        <div className={styles.editContainer}>
          <div
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="name"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Name
              </label>
              <div>
                <TextField
                  name="name"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Steven Grant"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="company-name"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Company Name
              </label>
              <div>
                <TextField
                  name="company-name"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="s.grant22@outlook.com"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="phone-number"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Phone Number
              </label>
              <div>
                <TextField
                  name="phone-number"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="00000 000000"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="company-logo"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Company Log
              </label>
              <div>
                <Button
                  name="company-logo"
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#2E2E2E",
                    marginTop: "6px",
                    opacity: "36%",
                    boxShadow: "none",
                    ":hover": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                  }}
                >
                  <input type="file" />
                </Button>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="address-line1"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Address Line 1
              </label>
              <div>
                <TextField
                  name="address-line1"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Address Line 1"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="address-line2"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Address Line 2
              </label>
              <div>
                <TextField
                  name="address-line2"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Address Line 2"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="post-code"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Post Code
              </label>
              <div>
                <TextField
                  name="post-code"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Post Code"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="city"
                style={{ width: "240px", fontSize: "18px" }}
              >
                City
              </label>
              <div>
                <TextField
                  name="city"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="City"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label
                htmlFor="country"
                style={{ width: "240px", fontSize: "18px" }}
              >
                Country
              </label>
              <div>
                <TextField
                  name="country"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Country"
                  style={{ opacity: "42%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          sx={{
            backgroundColor: Colors.primary,
            color: Colors.trueWhite,
            marginTop: "35px",
            width: "15rem",
            height: "4rem",
            borderRadius: "6px",
            textTransform: "unset",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": {
              backgroundColor: changeShade(Colors.primary, -10),
            },
          }}
        >
          Save
        </Button>
      </Fade>
    </>
  );
};
