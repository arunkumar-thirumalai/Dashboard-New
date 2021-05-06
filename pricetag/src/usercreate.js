import { useContext , useState } from "react";
import UserContext from "./userContext";

export default function UserCreate() {

  let userData = useContext(UserContext)

  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let userSubmit=(e)=>{
      e.preventDefault()
      
      userData.setUserList([...userData.userList,{
        firstName,
        lastName,
        email,
        password
    }])
      
  }

return<>
  <div className="container">
    <div className="row">
      <div classname="col-lg-6">
        <h1>User Form</h1>
      </div>
    </div>

    <form onSubmit={userSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>First Name</label>
          <input
            className="form-control"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          ></input>
        </div>
        <div className="col-lg-6">
          <label>Last Name</label>
          <input
            className="form-control"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <label>E-mail</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
        </div>
        <div className="col-lg-6">
          <label>Password</label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </div>
    </form>
  </div>
  </>
}
