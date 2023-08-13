import styles from './Login.module.css';
import { Footer } from '../../Components/Common/';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Colors } from '../../config';
import {
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Alert,
} from '@mui/material';
import { Button } from '../../Components/Common/Button';
import { LoginBox } from '../../Components/LoginBox/LoginBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Fade } from 'react-reveal';
import axios from 'axios';
import qs from 'qs';
import { getCookie } from '../../helpers/getCookie';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: {
      value: '',
      required: true,
      error: false,
      errorText: 'Name should not contain numbers',
      validate: (val, currState) => {
        return /^[a-zA-Z-'. ]+$/.test(val);
      },
    },
    email: {
      value: '',
      required: true,
      error: false,
      errorText: 'Email must be in the format: xyz@xyz.xyz',
      validate: (val) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      },
    },
    phone: {
      value: '',
      required: true,
      error: true,
      errorText: 'Please enter a valid phone number',
      validate: (val) => {
        return val.length > 10 && val.length < 15;
      },
    },
    password: {
      value: '',
      required: true,
      error: false,
      errorText: 'Password must have more than 6 characters',
      validate: (val, currState) => {
        return val.length >= 6;
      },
    },
    confirmPassword: {
      value: '',
      required: true,
      errorText: 'Confrim Password does not match with the Password',
      error: false,
      validate: (val, currState) => {
        return val === currState.password.value;
      },
    },
    organization: {
      value: '',
      required: true,
      error: false,
      validate: () => true,
    },
    coupon: {
      value: '',
      error: false,
      validate: () => true,
    },
  });
  const [showPassword, setShowPassword] = useState();
  const [formError, setFormError] = useState('');
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const inputHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
        error: !prev[e.target.name].validate(e.target.value, prev),
      },
    }));
  };
  const phoneInputHandler = (phone) => {
    setFormData((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        value: phone,
        error: !prev.phone.validate(phone),
      },
    }));
  };

  const sendReq = async () => {
    const data = qs.stringify({
      name: formData.fname.value,
      email: formData.email.value,
      phone: formData.phone.value,
      company_name: formData.organization.value,
      password: formData.password.value,
      password_confirmation: formData.confirmPassword.value,
    });

    const config = {
      method: 'post',
      url: '/employer/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };
    try {
      const res = await axios(config);
      console.log(res);
      const ret = res.data;
      console.log(ret);
    } catch (e) {
      console.log(e);
    }
  };

  const submitForm = async () => {
    for (const item in formData) {
      if (formData[item].required && !formData[item].value.length) {
        setFormData((prev) => ({
          ...prev,
          [item]: {
            ...prev[item],
            error: true,
          },
        }));
        setFormError('Please enter all the required fields');
        return;
      }

      if (formData[item].error) {
        setFormError(formData[item].errorText);
        return;
      }
    }
    await sendReq();
  };

  return (
    <Fade duration={400}>
      <div className={styles.LoginContainer}>
        <LoginBox customStyle={{ maxWidth: '930px' }}>
          <div className={styles.registerBox}>
            <h2>Register</h2>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth={true}
                  name="fname"
                  autoFocus={true}
                  label="Full Name"
                  value={formData.fname.value}
                  onChange={inputHandler}
                  error={formData.fname.error}
                  variant="outlined"
                  sx={{
                    height: '62px',
                    boxSizing: 'border-box',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <PhoneInput
                  inputProps={{
                    name: 'phone',
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
                  country={'gb'}
                  inputStyle={{ width: '100%' }}
                  dropdownStyle={{ textAlign: 'left' }}
                  placeholder="Phone"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  value={formData.email.value}
                  error={formData.email.error}
                  onChange={inputHandler}
                  fullWidth={true}
                  label="Email Address"
                  variant="outlined"
                  sx={{
                    height: '62px',
                    boxSizing: 'border-box',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth={true}
                  name="password"
                  value={formData.password.value}
                  error={formData.password.error}
                  onChange={inputHandler}
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  sx={{
                    height: '62px',
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
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth={true}
                  name="organization"
                  value={formData.organization.value}
                  error={formData.organization.error}
                  onChange={inputHandler}
                  label="Organization"
                  variant="outlined"
                  sx={{
                    height: '62px',
                    boxSizing: 'border-box',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth={true}
                  name="confirmPassword"
                  value={formData.confirmPassword.value}
                  error={formData.confirmPassword.error}
                  onChange={inputHandler}
                  label="Confirm Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  sx={{
                    height: '62px',
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="coupon"
                  value={formData.coupon.value}
                  onChange={inputHandler}
                  error={formData.coupon.error}
                  fullWidth={true}
                  label="Coupon (optional)"
                  variant="outlined"
                  sx={{
                    height: '62px',
                    boxSizing: 'border-box',
                  }}
                />
              </Grid>
              {formError ? (
                <Grid item xs={12}>
                  <Alert
                    severity="error"
                    onClose={() => {
                      setFormError('');
                    }}
                  >
                    {formError}
                  </Alert>
                </Grid>
              ) : null}
              <Button
                label="Sign Up"
                color={Colors.primary}
                style={{ width: '446px', margin: '2rem auto 0' }}
                onClick={submitForm}
              />
            </Grid>

            <p className={styles.rich_p}>
              Already have an account?{' '}
              <Link
                to="/login"
                style={{
                  color: Colors.primary,
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Login
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
