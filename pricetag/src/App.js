import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import {UserProvider} from './userContext'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UserList from './userlist';
import UserCreate from './usercreate';
import UserEdit from './useredit';

function App() {
  return (
    <Router>
    <div id="wrapper">
     <Sidebar></Sidebar>
     <UserProvider>
     <div id="content-wrapper" class="d-flex flex-column">
     <div id="content">
       <Topbar></Topbar>
       <div class="container-fluid">
         
           <Switch>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/users" component={UserList}/>
             <Route path="/usercreate" component={UserCreate}/>
             <Route path="/useredit/:id" component={UserEdit}/>
           </Switch>
         
         </div>
     </div>
       </div>
       </UserProvider>
    </div>
    </Router>
  );
}

export default App;