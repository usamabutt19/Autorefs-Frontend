import { DashHeader } from "../../Components/Common/DashHeader";
import { TextField, InputAdornment } from "@mui/material";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";
import styles from "./Candidate.module.css";
import { Fade } from "react-reveal";
import { candidates } from "../../helpers/mockData";

export const CandidateDashboard = () => {
  return (
    <>
      <DashHeader title="Dashboard" subtitle="Welcome back, Eric" />
      <Fade duration={400}>
        <div style={{ marginTop: "30px" }}>
          <div>
            <p style={{ fontSize: "25px", fontWeight: "700" }}>
              Your References
            </p>
          </div>
          <div className={styles.dashContainer}>
            <TextField
              placeholder="Search"
              type="search"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={searchIcon} width="15px" alt="Search" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={filterIcon} width="15px" alt="Filter" />
                  </InputAdornment>
                ),
              }}
            />
            <div>
              {candidates.map(candidate => (
                <div className={styles.candidateStyle}>
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                        width: "220px",
                      }}
                    >
                      {candidate.name}
                    </p>
                    <p style={{ fontSize: "17px" }}>{candidate.email}</p>
                  </div>
                  <p>REF #{candidate.ref}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
