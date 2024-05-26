import logo from './logo.svg';
import './App.css';
import Home from './features/home/home';
import Login from './features/login/login';
import { useSelector } from 'react-redux';

function App() {
 var {isLoggedin}= useSelector(state=>state.loginReducer)

  return (
    <div>
      {isLoggedin && <Home></Home>}
      {!isLoggedin && <Login></Login>}
      
    </div>
  );
}

export default App;
