import { Grid, TextField, InputAdornment } from '@mui/material';
import { DashHeader } from '../../Components/Common/DashHeader';
import Fade from 'react-reveal/Fade';
import styles from './Dashboard.module.css';
import { applicants } from '../../helpers/mockData';
import { Colors } from '../../config';
import { Card } from "../../Components/Common/Card";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";
import { useState } from "react";
import { RequestForm } from "./SideDrawer/RequestForm";
import { ApplicantData } from "./SideDrawer/ApplicantData";

export const Dashboard = ({ showRequest, setShowRequest }) => {
  const [showApplicant, setShowApplicant] = useState(null);

  return (
    <>
      <div
        onClick={() => {
          if (showApplicant || showRequest) {
            setShowApplicant(false);
            setShowRequest(false);
          }
        }}
      >
        <DashHeader
          title="Dashboard"
          subtitle="Welcome back, John"
        ></DashHeader>
        <Grid item xs={12}>
          <h2>Applicants</h2>
        </Grid>
      </div>
      <Fade duration={400}>
        <div
          className={styles.dashContent}
          onClick={() => {
            if (showApplicant || showRequest) {
              setShowApplicant(false);
              setShowRequest(false);
            }
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            justifyContent="space-between"
            columns={16}
          >
            <Grid item xs={6} sx={{ position: "relative", height: "100%" }}>
              <div
                style={{ padding: "50px", position: "absolute", width: "100%" }}
                className={styles.whiteBox}
              >
                <div>
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
                    {applicants.map(applicant => (
                      <div
                        className={styles.applicantStyle}
                        style={{
                          borderColor:
                            showApplicant == applicant.id
                              ? Colors.primary
                              : null,
                        }}
                        onClick={e => {
                          setShowApplicant(applicant.id);
                        }}
                      >
                        <div>
                          <p style={{ fontSize: "17px", fontWeight: "500" }}>
                            {applicant.name}
                          </p>
                          <p style={{ fontSize: "17px" }}>{applicant.email}</p>
                        </div>
                        <p>REF #{applicant.ref}</p>
                      </div>
                    ))}
                  </div>{" "}
                </div>
              </div>
            </Grid>
            <Grid
              item
              container
              xs={7}
              rowSpacing={3}
              alignContent="space-between"
              className={styles.cardContainer}
            >
              <Grid item xs={12} sx={{ height: "25%" }}>
                <Card
                  hoverColor={Colors.primary}
                  style={{ backgroundColor: Colors.primary, color: "#fff" }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto Black",
                      fontSize: "35px",
                    }}
                  >
                    89 Total Requests
                  </p>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    (including deleted references)
                  </p>
                </Card>
              </Grid>
              <Grid item container sx={{ height: "75%" }} spacing={4}>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      Referees
                    </p>
                    <span
                      style={{
                        fontFamily: "Roboto Black",
                        fontSize: "42px",
                      }}
                    >
                      174
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      Referees
                    </p>
                    <span
                      style={{
                        fontFamily: "Roboto Black",
                        fontSize: "42px",
                      }}
                    >
                      56
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      Referees
                    </p>
                    <span
                      style={{
                        fontFamily: "Roboto Black",
                        fontSize: "42px",
                      }}
                    >
                      32.6%
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      References
                    </p>
                    <span
                      style={{ fontSize: "42px", fontFamily: "Roboto Black" }}
                    >
                      174
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      References
                    </p>
                    <span
                      style={{ fontSize: "42px", fontFamily: "Roboto Black" }}
                    >
                      40
                    </span>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card hoverColor={Colors.trueWhite}>
                    <p style={{ fontSize: "18px", fontWeight: "700" }}>
                      References
                    </p>
                    <span
                      style={{ fontSize: "42px", fontFamily: "Roboto Black" }}
                    >
                      22.99%
                    </span>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>

      {<ApplicantData show={showApplicant} />}
      {<RequestForm setShowRequest={setShowRequest} show={showRequest} />}
    </>
  );
};
