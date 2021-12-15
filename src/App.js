import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard1 from './components/Dashboard1';
import NotFound from './components/NotFound';
import Category from './components/Category';
import Product from './components/Product';
import Order from './components/Order';
import Feedback from './components/Feedback';
import Changepass from './components/Changepass';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard1}/>
          <Route path="/category" exact component={Category}/>
          <Route path="/products" exact component={Product}/>
          <Route path="/orders" exact component={Order}/>
          <Route path="/feedback" exact component={Feedback}/>
          <Route path="/changepassword" exact component={Changepass}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

