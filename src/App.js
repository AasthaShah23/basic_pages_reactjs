
import './App.css';
import ChangeMode from './Pages/ChangeMode/ChangeMode';
import ForgotPass from './Pages/ForgotPassword/ForgotPass';
import Maintenance from './Pages/Maintenance/Maintenance';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Profile from './Pages/Profile/Profile';
import Signin from './Pages/Sign-in/Signin';
import Signup from './Pages/Sign-up/Signup';
import SomethingWrong from './Pages/SomethingWrong/SomethingWrong';
import ResetPass from './Pages/resetpassword/ResetPass';

function App() {
  return (
    <div className="App">
     <Signup />
     <Signin />
     <ResetPass/>
     <ForgotPass/>
     <Profile/>
     <SomethingWrong/>
     <PageNotFound/>
     <Maintenance/>
     <ChangeMode/>
    </div>
  );
}

export default App;
