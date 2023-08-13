import styles from './Login.module.css';
import { Footer } from '../../Components/Common/';
import { Colors } from '../../config';
import { TextField } from '@mui/material';
import { Button } from '../../Components/Common/Button';
import { LoginBox } from '../../Components/LoginBox/LoginBox';
import { Fade } from 'react-reveal';

export const ForgetPassword = () => {
  return (
    <Fade duration={400}>
      <div className={styles.LoginContainer}>
        <LoginBox>
          <div className={styles.ElGroup}>
            <h2>Reset your Password</h2>
            <p style={{ margin: '45px auto' }}>
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth={true}
                sx={{
                  height: '62px',
                  boxSizing: 'border-box',
                }}
              />
              <Button label="Continue" color={Colors.primary} />
            </form>
          </div>
        </LoginBox>
        <Footer
          style={{
            textAlign: 'center',
            margin: '3.125rem 0',
          }}
        />
      </div>
    </Fade>
  );
};
