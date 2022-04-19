// import { NavLink } from 'react-router-dom'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MakeTransfer from '../MakeTransfer/MakeTransfer'

const LandingPage = ({ setSignedIn, user, setUser, csrfToken}) =>  {
    const navigate = useNavigate();
    const onLogOut = () => {
        setSignedIn(false);
        navigate('/');
    }

    return( 
        <div className='details_con'>
            <div className='det'>
                <h3>Hello</h3>
            </div>
            <div className='content'>
                <div className='trtable'>
                    <table id='transaction'>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>To</th>
                                <th>Description</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user['transfers'].reverse().map((val, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{val['amount']}</td>
                                            <td>{val['to']}</td>
                                            <td>{val['description']}</td>
                                            <td>{val['balance']}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='det'>
                <h3>makeTransfer</h3>
                <MakeTransfer setUser={setUser} csrfToken={csrfToken} />
            </div>
        </div>
    )
}

export default LandingPage;