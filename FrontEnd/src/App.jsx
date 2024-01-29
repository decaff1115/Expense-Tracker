import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import PrivateRoute from './Components/PrivateRoute'
import Jeepneys from './Components/Jeepneys'
import EditJeepney from './Components/EditJeepney'
import AddJeepney from './Components/AddJeepney'
import SignUp from './Components/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
    
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/transactions' element={<Employee />}></Route>
        <Route path='/dashboard/history' element={<Category />}></Route>
        <Route path='/dashboard/jeepney_detail' element={<Jeepneys />}></Route>
        <Route path='/dashboard/add_jeepney' element={<AddJeepney />}></Route>
        <Route path='/dashboard/edit_jeepney/:id' element={<EditJeepney />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
