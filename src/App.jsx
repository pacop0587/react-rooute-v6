import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import About from './components/About'
import User from './User'
import Home from './components/Home'
import NotFound from './NotFound'
import Navbar from './components/Navbar'
import UserPage from './components/UserPage'
import Dashboard from './components/Dashboard'


function App() {

  return (
	<BrowserRouter>
		<div className="container">
			<Navbar />
		</div>
		<Routes>
			<Route path = '/' element = {<Home />} />
			<Route path = '/about' element = {<About />} />
			<Route path = '/user' element = {<User />} />
			<Route path = 'usuarios' element = {<Navigate to = '/user' />} />
			<Route path = '/dashboard/*' element = {<Dashboard />} />
			<Route path = '/users/:id' element = {<UserPage/>} />
			<Route path = '*' element = {<NotFound />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
