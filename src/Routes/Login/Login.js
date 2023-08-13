import styles from './Login.module.css';
import { OutlinedButton, Footer } from '../../Components/Common/';
import { Apple, Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleLogo from '../../assets/google-logo.png';
import { Colors } from '../../config';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Button } from '../../Components/Common/Button';
import { Link } from 'react-router-dom';
import { LoginBox } from '../../Components/LoginBox/LoginBox';
import { useState } from 'react';
import { Fade } from 'react-reveal';

export const Login = ({ loginHandler }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const userLogin = () => {
    if (email === 'admin' && password === 'admin') loginHandler(true);
  };

  return (
    <Fade duration={400}>
      <div className={styles.LoginContainer}>
        <LoginBox>
          <div className={styles.ElGroup}>
            <h2>Sign in to AutoRefs</h2>
            <div className={styles.buttonGrp}>
              <OutlinedButton
                leftImg={
                  <img
                    src={GoogleLogo}
                    className="left-icon"
                    alt="Google Logo"
                    style={{
                      width: '20px',
                    }}
                  />
                }
                color={Colors.blue}
                borderColor={Colors.blue}
                label="Sign in with Google"
              />

              <OutlinedButton
                leftImg={
                  <Apple
                    className="left-icon"
                    sx={{ color: Colors.trueBlack }}
                  />
                }
                color={Colors.gray}
                borderColor={Colors.trueBlack}
                label="Sign in with Apple"
              />
            </div>
            <div className={styles.divider}>
              <span>OR</span>
            </div>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth={true}
                sx={{
                  height: '62px',
                  boxSizing: 'border-box',
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth={true}
                sx={{
                  height: '62px',
                  marginTop: '1rem',
                  boxSizing: 'border-box',
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                label="Sign in"
                color={Colors.primary}
                onClick={userLogin}
              />
            </form>
            <p className={styles.rich_p}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                style={{
                  color: Colors.primary,
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Sign up
              </Link>
            </p>
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
