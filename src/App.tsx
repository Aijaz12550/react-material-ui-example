
import './App.css';
import { Welcome } from "./screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core"
import { theme } from './theme';

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme} >

        <Route path="/welcome" component={Welcome} />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
