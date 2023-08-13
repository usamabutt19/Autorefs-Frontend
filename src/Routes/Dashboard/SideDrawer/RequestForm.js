import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button as MUButton } from "@mui/material";
import { changeShade } from "../../../helpers";
import { useState } from "react";
import { Colors } from "../../../config";
import styles from "./Drawer.module.css";

export const RequestForm = ({ setShowRequest, show }) => {
  const [date, setDate] = useState(null);

  return (
    <div
      className={styles.requestForm}
      style={{
        transform: show ? "none" : "translateX(100%)",
      }}
    >
      <div style={{ padding: "75px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "25px", fontWeight: "black" }}>
            <strong>New Reference Request</strong>
          </p>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowRequest(false)}
          >
            <CloseIcon fontSize="large" sx={{ opacity: "41%" }} />
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="full-name"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Full Name
            </label>
            <div>
              <TextField
                name="full-name"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="Steven Grant"
                style={{ opacity: "21%" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="email-address"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Email Address
            </label>
            <div>
              <TextField
                name="email-address"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="s.grant22@outlook.com"
                style={{ opacity: "21%" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="phone" style={{ width: "240px", fontSize: "18px" }}>
              Phone
            </label>
            <div>
              <PhoneInput
                placeholder="7592 350491"
                country={"gb"}
                containerStyle={{ height: "30px" }}
                dropdownStyle={{ textAlign: "left" }}
                specialLabel=""
                inputStyle={{
                  border: "none",
                  height: "20px",
                  opacity: "21%",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="designation"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Designation
            </label>
            <TextField
              name="designation"
              select
              variant="standard"
              InputProps={{
                style: {
                  width: "240px",
                },
                disableUnderline: true,
              }}
              label="Select Designation"
              style={{ opacity: "21%" }}
            />

            <span
              style={{
                backgroundColor: "#F3F3F3",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                marginLeft: "20px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  marginTop: "18px",
                }}
                src={require("../../../assets/icons/eyeIcon.svg").default}
                alt={"eyeIcon"}
              />
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="question-profile"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Question Profile
            </label>
            <TextField
              name="question-profile"
              select
              variant="standard"
              InputProps={{
                style: {
                  width: "240px",
                },
                disableUnderline: true,
              }}
              label="Select Profile"
              style={{ opacity: "21%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="references-required"
              style={{ width: "240px", fontSize: "18px" }}
            >
              References Required
            </label>
            <TextField
              name="references-required"
              select
              variant="standard"
              InputProps={{
                style: {
                  width: "240px",
                },
                disableUnderline: true,
              }}
              label="Select References"
              style={{ opacity: "21%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="reminders"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Reminders
            </label>
            <TextField
              name="reminders"
              select
              variant="standard"
              InputProps={{
                style: {
                  width: "240px",
                },
                disableUnderline: true,
              }}
              label="Everyday"
              style={{ opacity: "21%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="end-date"
              style={{ width: "240px", fontSize: "18px" }}
            >
              End Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                InputProps={{
                  style: {
                    width: "200px",
                  },
                  disableUnderline: true,
                }}
                disableOpenPicker
                label="Select Date"
                value={date}
                onChange={newValue => {
                  setDate(newValue);
                }}
                renderInput={params => (
                  <TextField
                    variant="standard"
                    style={{ opacity: "21%" }}
                    {...params}
                  />
                )}
                style={{ opacity: "21%" }}
              ></DatePicker>
              <span
                style={{
                  backgroundColor: "#F3F3F3",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    marginTop: "16px",
                  }}
                  src={
                    require("../../../assets/icons/calendarIcon.svg").default
                  }
                  alt={"calendarIcon"}
                />
              </span>
            </LocalizationProvider>
          </div>
          <div style={{ display: "flex" }}>
            <label
              htmlFor="applicant-message"
              style={{ width: "240px", fontSize: "18px" }}
            >
              Applicant Message
            </label>
            <TextField
              name="applicant-message"
              variant="outlined"
              placeholder="Enter a note for the applicant (optional)"
              InputProps={{
                style: {
                  borderRadius: "8px",
                  width: "350px",
                },
              }}
              multiline
              rows={4}
              style={{ opacity: "21%" }}
            />
            <span
              style={{
                backgroundColor: "#F3F3F3",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                marginLeft: "20px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  marginTop: "18px",
                }}
                src={require("../../../assets/icons/eyeIcon.svg").default}
                alt={"eyeIcon"}
              />
            </span>
          </div>
        </div>

        <MUButton
          sx={{
            marginTop: "50px",
            backgroundColor: Colors.primary,
            color: Colors.trueWhite,
            width: "15rem",
            height: "4rem",
            borderRadius: "6px",
            textTransform: "unset",
            fontSize: "18px",
            "&:hover": {
              backgroundColor: changeShade(Colors.primary, -10),
            },
          }}
        >
          Send Request
        </MUButton>
      </div>
    </div>
  );
};
