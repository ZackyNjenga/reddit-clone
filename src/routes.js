import {Route, Router} from "react-router-dom";
import App from "./containers/App";

const Routes = (props) > (
    <Router {...props}>
        <Route path="/" component{App}>

        </Route>
    </Router>
);

export default Routes;
