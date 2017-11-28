import React from 'react'
import Login from "@/login/Login.js"
import Main from '@/main/Main.js'
import User from '@/user/User.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const RouterConfig = () => (
  <Router>
    <div>
      <Route path="/" exact component={Main}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/user/:id" component={User}></Route>
    </div>
  </Router>
)

export default RouterConfig