import React, {useState} from 'react'
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const [user, setUser] = useState(true);

  const childToParent = (childData) => {
    setUser(childData)
  }

  // return user ? (
  //   <Login childToParent={childToParent} />
  // ) : (
  //   <Signup childToParent={childToParent}/>
  // )
  // // return <Signup/>

  return <Dashboard/>
}

export default App;
