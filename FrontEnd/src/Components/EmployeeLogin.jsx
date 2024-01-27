import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EmployeeLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/employee/employee_login', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true)
                    navigate('/employee_detail/' + result.data.id)
                } else {
                    setError(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='login-page'>
            
            <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
                <div className='p-3 rounded w-25 border loginForm text-center'>
                    <div className='text-warning'>
                        {error && error}
                    </div>
                    
                    <h2>CASHIER</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input type="email" name='email' autoComplete='off' placeholder='employee@email.com'
                                onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password:</strong></label>
                            <input type="password" name='password' placeholder='********'
                                onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control' />
                        </div>
                        <button className='btn btn-success w-100 mb-2'>Log in</button>
                        <div className='mb-1'>
                            <input type="checkbox" name="tick" id="tick" className='me-2' />
                            <label htmlFor="password">Accept the terms and conditions</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EmployeeLogin