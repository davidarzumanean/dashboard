import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/index/Index'
import Contacts from './views/contacts/Contacts';
import AppHeader from './components/layout/AppHeader/AppHeader';
import Sidebar from './components/layout/Sidebar/Sidebar';
import styles from './assets/styles/global/layout.module.scss'

function App() {
  return (
    <div className={styles.appWrapper}>
      <Router>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <AppHeader />
          <div className={styles.mainContent}>
            <Switch>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
