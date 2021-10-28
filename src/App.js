import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddServices from './Pages/AddServices/AddServices';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
    <Header></Header>
       <Switch>
          <Route exact path="/"> 
           <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/addService">
            <AddServices></AddServices>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
    </Router>
      </AuthProvider>
 
    </div>
  );
}

export default App;
