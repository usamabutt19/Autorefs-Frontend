import styles from './Common.module.css';
import { Button } from '@mui/material';
import { Colors } from '../../config';
import { changeShade } from '../../helpers';
import Fade from 'react-reveal/Fade';

export const SubscriptionBox = ({ price, label }) => {
  return (
    <div className={styles.subBox}>
      <Fade duration={400}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "0px",
            }}
          >
            £{price}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "300", color: "#8D8D8D" }}>
            Per month (ex VAT)
          </p>
        </div>
        <div
          style={{
            height: "1px",
            width: "260px",
            margin: "25px auto",
            backgroundColor: "#707070",
            opacity: "30%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
            justifyContent: "center",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li className={styles.bullet}>{label} References Request</li>
            <li className={styles.bullet}>Unlimited HR Users</li>
            <li className={styles.bullet}>Unlimited Custom Questions</li>
            <li className={styles.bullet}>Team Management</li>
            <li className={styles.bullet}>Helpdesk Support</li>
            <li className={styles.bullet}>Live Chat</li>
          </ul>
          <Button
            sx={{
              backgroundColor: Colors.primary,
              color: Colors.trueWhite,
              marginBottom: "40px",
              width: "180px",
              height: "55px",
              marginTop: "35px",
              borderRadius: "6px",
              textTransform: "unset",
              fontSize: "18px",
              "&:hover": {
                backgroundColor: changeShade(Colors.primary, -10),
              },
            }}
          >
            Subscribe
          </Button>
        </div>
      </Fade>
    </div>
  );
};
