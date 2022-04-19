// intenal state
import { useContext, useEffect, useState } from 'react';

// routing
import { Navigate, useLocation } from 'react-router-dom';

// routes - with route level code splitting
import { ROUTES } from './utils/constants';

// navigation guard
import NavGuard from './utils/router';

// css
import './assets/styles/app.css';
import './assets/styles/colors.css';
import './assets/styles/fonts.css';
import './assets/styles/scrollbar.css';
import './assets/styles/tailwind.css';

const App = () => {
  const [authState, setAuthState] = useState(false); // set to true when user logs in

  // scroll to top each time user changes location
  let location = useLocation();

  useEffect (() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  // check route validity
  const validRoute = () => {
    let valid = false;

    ROUTES.forEach((item) => {
      if (item.path.split('/')[1] ===  location.pathname.split('/')[1]) {
        valid = true;
      }
    });

    return valid;
  }

  // check user access
  const access = () => {
    let valid = true;

    ROUTES.forEach((item) => {
      if (item.path.split('/')[1] === location.pathname.split('/')[1]) {
        if ((item.path.split('/')[1] === 'user') && !authState) {
          valid = false;
        }
      }
    });

    return valid;
  }


  return (
    <div className="App">
        {/* catch all route and access control error page */}
        {!validRoute() && <Navigate replace to="not-found" />}
        {!access() && <Navigate replace to="access-denied" />}

        {/* visual content */}
        <NavGuard routes={ROUTES} auth={authState} adminAuth={authState} />
    </div>
  );
}

export default App;
