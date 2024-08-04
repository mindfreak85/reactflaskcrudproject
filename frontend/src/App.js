import './App.css'
import React from 'react'
import {Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import ListUserComponent from './components/ListUserComponent'
import CreateUserComponent from './components/CreateUserComponent'
import ViewUserComponent from './components/ViewUserComponent'
import UpdateUserComponent from './components/UpdateUserComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<ListUserComponent/>}></Route>
            <Route path='/users' element={<ListUserComponent/>}></Route>
            <Route path='/add-user/:id' element={<CreateUserComponent/>}></Route>
            <Route path='/view-users/:id' element={<ViewUserComponent/>}></Route>
            <Route path='/update-users/:id' element={<UpdateUserComponent/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
