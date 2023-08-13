import styles from './LoginBox.module.css';
import logo from '../../assets/autorefs-logo.png';

export const LoginBox = ({ children, customStyle }) => {
  return (
    <div className={styles.LoginBox} style={!!customStyle ? customStyle : {}}>
      <img src={logo} alt="autorefs-logo" width="300px" />
      {children}
    </div>
  );
};
