import { Colors } from '../../config';
import styles from './Drawer.module.css';
import logo from '../../assets/autorefs-logo-light.png';
import { NavLink } from 'react-router-dom';

export const Drawer = ({ children, footer }) => {
  return (
    <div
      style={{ backgroundColor: Colors.darkGray }}
      className={styles.DrawerContainer}
    >
      <div>
        <img src={logo} alt="AutoRefs Logo" width="300px" />
        <div className={styles.itemContainer}>{children}</div>
      </div>
      {!!footer ? <div className={styles.drawerFooter}>{footer}</div> : null}
    </div>
  );
};

export const DrawerItem = ({ Icon, link, label, selected, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      to={link}
      className={({ isActive }) => (isActive ? styles.active : styles.item)}
    >
      {!!Icon ? Icon : null}
      <p>{label}</p>
    </NavLink>
  );
};
