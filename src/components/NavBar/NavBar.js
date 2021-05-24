import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classes from './NavBar.module.scss';

function NavBar({ history }) {
  return (
    <nav className={classes.nav}>
      <div className={classes.links}>
        <Link to="/">NotProtectedUserPage</Link>
        <Link to="/protected">ProtectedUserPage</Link>
      </div>
      <div className={classes.btns}>
        <button onClick={() => {
          localStorage.setItem("isAuthorized", true);
          history.push("/protected");
        }}>LogIn</button>
        <button onClick={() => {
          localStorage.setItem("isAuthorized", false);
          history.push("/");
        }}>LogOut</button>
      </div>
    </nav>
  )
}

export default withRouter(NavBar);