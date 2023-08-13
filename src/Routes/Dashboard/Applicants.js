import { DashHeader } from '../../Components/Common/DashHeader';
import {
  TextField,
  InputAdornment,
  MenuItem,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Colors } from '../../config';
import styles from './Dashboard.module.css';
import { applicantDatas } from '../../helpers/mockData';
import searchIcon from '../../assets/icons/search.svg';
import Fade from 'react-reveal/Fade';

export const Applicants = () => {
  return (
    <>
      <DashHeader title="Applicants" subtitle=""></DashHeader>
      <Fade duration={400}>
        <div className={styles.applicantsContent}>
          <TextField
            placeholder="Search"
            type="search"
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: "8px",
                width: "300px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <img src={searchIcon} width="15px" alt="Search" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            InputProps={{
              style: {
                borderRadius: "8px",
                width: "300px",
              },
            }}
            label="Filter"
          >
            <MenuItem value="">Filter</MenuItem>
          </TextField>
        </div>
        <div className={styles.applicantsContentp}>
          <p>
            Total Applicants: <strong>9</strong>
          </p>
          <p style={{ color: Colors.primary }}>
            <strong> | </strong>
          </p>
          <p>
            Total Referees: <strong>16</strong>
          </p>
        </div>
        <TableContainer sx={{ height: "100%" }}>
          <Table
            sx={{
              borderCollapse: "separate",
              borderSpacing: "0px 18px",
            }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                "& th": {
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                },
                "& th:first-child": {
                  paddingLeft: "40px",
                },
                "& th:last-child": {
                  paddingRight: "40px",
                },
              }}
            >
              <TableRow>
                <TableCell>
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>
                    Applicant
                  </p>
                </TableCell>
                <TableCell align="left">
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>Created</p>
                </TableCell>
                <TableCell align="center">
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>
                    Reminders
                  </p>
                </TableCell>
                <TableCell align="center">
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>
                    Referess Reqiuired
                  </p>
                </TableCell>
                <TableCell align="center">
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>
                    Referees Provided
                  </p>
                </TableCell>
                <TableCell align="center">
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>Actions</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applicantDatas.map((applicantData) => (
                <TableRow
                  key={applicantData.name}
                  sx={{
                    background: "transparent",
                    "& td": {
                      backgroundColor: Colors.trueWhite,
                    },
                    "& td:first-child": {
                      borderRadius: "1em 0 0 1em",
                      paddingLeft: "40px",
                    },
                    "& td:last-child": {
                      borderRadius: "0 1em 1em 0",
                      paddingRight: "40px",
                    },
                    filter: "drop-shadow(6px 4px 6px #00000005)",
                  }}
                >
                  <TableCell>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                        marginBottom: "0px",
                      }}
                    >
                      {applicantData.name}
                    </p>
                    <br />
                    <p style={{ marginTop: "0px", fontSize: "17px" }}>
                      {applicantData.email}
                    </p>
                  </TableCell>
                  <TableCell align="left">
                    <p style={{ fontSize: "17px" }}>
                      {new Date(applicantData.created).toLocaleDateString()},{" "}
                      {new Date(applicantData.created).toLocaleTimeString()}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "17px" }}>
                      {applicantData.reminders}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "17px" }}>
                      {" "}
                      {applicantData.refereesRequired}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "17px" }}>
                      {applicantData.refereesProvided}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={require("../../assets/icons/action1.svg").default}
                      alt={"action-1"}
                    />
                    <img
                      style={{
                        marginLeft: "20px",
                      }}
                      src={require("../../assets/icons/action2.svg").default}
                      alt={"action-2"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Fade>
    </>
  );
};
