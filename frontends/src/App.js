/*
 * @Author: @yzcheng
 * @Date: 2020-11-11 20:58:02
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-12 13:57:29
 */
import Login from './routes/Login'
import Content from './routes/Content'
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom'
import './assets/css/app.scss'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Content} />
      </Switch>
    </div>
  )
}

export default App
