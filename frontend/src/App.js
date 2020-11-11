/*
 * @Author: @yzcheng
 * @Date: 2020-11-11 17:37:42
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-11 18:25:04
 */
import './App.css';
import Login from "./routes/Login";
import Content from "./routes/Content";
import PrivateRoute from './components/PrivateRoute'
import "./assets/css/app.scss";
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/' component={Content} />
      </Switch>
    </div>
  );
}

export default App;
