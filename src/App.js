import './App.css';
import { AppRoot } from './Routes/App/AppRoot';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Plan } from './Components/Popups/Plan';
import { UpdatePassword } from './Components/Popups/UpdatePassword';
import { useState, useEffect } from 'react';
import { LoginRoot } from './Routes/Login/LoginRoot';
import { RefereeRoot } from './Routes/Referees/RefereeRoot';
import axios from 'axios';
import { getCookie } from './helpers/getCookie';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(false);

  const setCSRFCookie = async () => {
    if (!getCookie("XSRF-TOKEN")) {
      await axios.get("/csrf-cookie");
    }
    // axios.defaults.headers.common["XSRF-TOKEN"] = getCookie("XSRF-TOKEN");
  };

  useEffect(() => {
    setCSRFCookie();
  }, []);

  return (
    <>
      <div className="AppContainer">
        {isLogin ? (
          <AppRoot
            setUpdatePassword={setUpdatePassword}
            setCurrentPlan={setCurrentPlan}
          />
        ) : (
          <LoginRoot loginHandler={setIsLogin} />
        )}
        {currentPlan ? <Plan setCurrentPlan={setCurrentPlan} /> : null}
        {updatePassword ? (
          <UpdatePassword setUpdatePassword={setUpdatePassword} />
        ) : null}
      </div>
    </>
  );
}

export default App;
