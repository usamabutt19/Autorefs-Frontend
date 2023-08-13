import styles from "./Applicant.module.css";
import PhoneInput from "react-phone-input-2";
import { RefereeDetailsStep2 } from "./RefereeDetailsStep2";
import { TextField, Grid, Button, IconButton } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { changeShade } from "../../helpers";
import { Colors } from "../../config";

export const RefereeDetails = ({ move }) => {
  const [step, setStep] = useState(false);
  const [sdate, setSDate] = useState(null);
  const [edate, setEDate] = useState(null);

  const [formData, setFormData] = useState({
    email: {
      value: "",
      required: true,
      error: false,
      errorText: "Email must be in the format: xyz@xyz.xyz",
      validate: val => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      },
    },
    fname: {
      value: "",
      required: true,
      error: false,
      errorText: "Name should not contain numbers",
      validate: (val, currState) => {
        return /^[a-zA-Z-'. ]+$/.test(val);
      },
    },
    phone: {
      value: "",
      required: true,
      error: true,
      errorText: "Please enter a valid phone number",
      validate: val => {
        return val.length > 10 && val.length < 15;
      },
    },
    cname: {
      value: "",
      required: true,
      error: false,
      errorText: "Company Name should not contain numbers",
      validate: (val, currState) => {
        return /^[a-zA-Z-'. ]+$/.test(val);
      },
    },
    jtitle: {
      value: "",
      required: true,
      error: false,
      errorText: "Job Title is invalid",
      validate: (val, currState) => {
        return /^[a-zA-Z-'. ]+$/.test(val);
      },
    },
    caddress: {
      value: "",
      required: true,
      error: false,
      errorText: "Address is invalid",
      validate: (val, currState) => {
        return /^[a-zA-Z0-9\s,/'-]+$/.test(val);
      },
    },
    signature: {
      value: "",
      required: true,
      error: false,
      errorText: "Signature Invalid",
      validate: (val, currState) => {
        return /^[a-zA-Z-'. ]+$/.test(val);
      },
    },
  });
  const inputHandler = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
        error: !prev[e.target.name].validate(e.target.value, prev),
      },
    }));
  };
  const phoneInputHandler = phone => {
    setFormData(prev => ({
      ...prev,
      phone: {
        ...prev.phone,
        value: phone,
        error: !prev.phone.validate(phone),
      },
    }));
  };

  return (
    <>
      <div>
        <p
          style={{
            fontSize: "40px",
            margin: "0",
            fontFamily: "Roboto Black",
          }}
        >
          Reference request from Opentech
        </p>
      </div>
      {step ? (
        <RefereeDetailsStep2 move={move} />
      ) : (
        <div className={styles.detailsContainer}>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            Please enter reference details
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                select
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                  },
                }}
                label="This referee is/was my"
                style={{ opacity: "47%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                variant="outlined"
                value={formData.email.value}
                error={formData.email.error}
                onChange={inputHandler}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "8px",
                  },
                }}
                placeholder="Referee's Email Address"
                style={{ opacity: "47%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="fname"
                value={formData.fname.value}
                onChange={inputHandler}
                error={formData.fname.error}
                InputProps={{
                  style: {
                    borderRadius: "8px",
                  },
                }}
                label="Referee's Full Name"
                style={{ opacity: "47%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <PhoneInput
                placeholder="Referee's Phone"
                fullWidth
                country={"gb"}
                dropdownStyle={{ textAlign: "left" }}
                specialLabel=""
                inputStyle={{
                  borderRadius: "8px",
                  width: "100%",
                  opacity: "47%",
                }}
                inputProps={{
                  name: "phone",
                }}
                isValid={(value, country) => {
                  if (value.length < 10 || value.length > 15) {
                    return false;
                  } else {
                    return true;
                  }
                }}
                value={formData.phone.value}
                onChange={phoneInputHandler}
              />
            </Grid>
            <Grid item container xs={12} sx={{ marginTop: "30px" }} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="cname"
                  value={formData.cname.value}
                  onChange={inputHandler}
                  error={formData.cname.error}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                    },
                  }}
                  label="Company Name"
                  style={{ opacity: "47%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    InputProps={{
                      style: {
                        width: "100%",
                        borderRadius: "8px",
                      },
                      disableUnderline: true,
                    }}
                    label="Start Date"
                    value={sdate}
                    onChange={newValue => {
                      setSDate(newValue);
                    }}
                    renderInput={params => (
                      <TextField
                        fullWidth
                        variant="outlined"
                        required
                        style={{ opacity: "47%" }}
                        {...params}
                      />
                    )}
                    style={{ opacity: "47%" }}
                  ></DatePicker>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="jtitle"
                  value={formData.jtitle.value}
                  onChange={inputHandler}
                  error={formData.jtitle.error}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                    },
                  }}
                  placeholder="Job Title"
                  style={{ opacity: "47%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    InputProps={{
                      style: {
                        width: "100%",
                        borderRadius: "8px",
                      },
                      disableUnderline: true,
                    }}
                    label="End Date"
                    value={edate}
                    onChange={newValue => {
                      setEDate(newValue);
                    }}
                    renderInput={params => (
                      <TextField
                        fullWidth
                        variant="outlined"
                        required
                        style={{ opacity: "47%" }}
                        {...params}
                      />
                    )}
                    style={{ opacity: "47%" }}
                  ></DatePicker>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="caddress"
                  value={formData.caddress.value}
                  onChange={inputHandler}
                  error={formData.caddress.error}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                    },
                  }}
                  placeholder="Company Address"
                  style={{ opacity: "47%" }}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="signature"
                  value={formData.signature.value}
                  onChange={inputHandler}
                  error={formData.signature.error}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                      alignItems: "baseline",
                    },
                    endAdornment: (
                      <IconButton sx={{ fontSize: "12px", color: "#1E1F21" }}>
                        {" "}
                        Clear Signature
                      </IconButton>
                    ),
                  }}
                  placeholder="Signature"
                  style={{ opacity: "47%" }}
                  multiline
                  rows={3}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  setStep(true);
                }}
                sx={{
                  backgroundColor: Colors.primary,
                  color: Colors.trueWhite,
                  width: "100%",
                  height: "60px",
                  borderRadius: "6px",
                  marginTop: "10px",
                  textTransform: "unset",
                  fontSize: "22px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: changeShade(Colors.primary, -10),
                  },
                }}
              >
                <strong>Save Reference</strong>
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
