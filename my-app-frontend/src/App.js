import "./App.css";
import { Route, Switch } from "react-router-dom";
import TapasList from "./TapasList";
import RenderRestaurant from "./RenderRestaurant";
import NavButtons from "./NavButtons";

function App() {
  return (
    <div>
      <h1>it works</h1>
      <NavButtons />
      <Switch>
        <Route exact path="/tapas_list">
          <TapasList />
        </Route>
        <Route exact path="/restaurant_list">
          {" "}
          TODO:change to dynamic path
          <RenderRestaurant />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
