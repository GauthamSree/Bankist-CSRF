import './MakeTransfer.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
// import useForm from '../useForm';

// import db from '../../firebase-config'
// import { ref, child, get } from "firebase/database";

const MakeTransfer = ({setUser}) => {
    const onChangeFactory = setter => {
        return e => {
          setter(e.target.value);
        };
      };      

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [to, setTo] = useState('');

    async function loginUser(credentials) {
        console.log(credentials);
        const handleError = response => {
            if (!response.ok) { 
               throw Error(response.statusText);
            } else {
               return response.json();
            }
        }; 
        return fetch('http://localhost:8001/transfer', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            },
          credentials: 'include',
          body: JSON.stringify(credentials)
        })
        .then(handleError)
        .then(data => {
            console.log("user", data);
            return data;
        })
        .catch(err => {
            console.error(err)
        }); 
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const res = await loginUser({
            amount,
            to,
            description,
        });
        console.log("eres", res);
        if (res?.user == null) {
            console.log(res);
            // handle error login failed
        } else {
            setUser(res?.user);
            console.log(res);
            // fetchUser();
        }
      }
    // const navigate = useNavigate();
    // const onSubmit = (data) => {
    //     const dbRef = ref(db);
    //     get(child(dbRef, "users/"+ data['uname'])).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //             var user_data = snapshot.val();
    //             if (user_data['pwd'] === data['pwd'] && user_data['acnt'] === data['acnt']) {
    //                 alert('User Logged In!')
    //                 setUsername(data['uname']);
    //                 setAccType(data['acnt']);
    //                 if (data['acnt'] === 'Donor') {
    //                     setIsLoggedIn(true);
    //                     navigate('/user/donor');
    //                 } else if (data['acnt'] === 'Patient') {
    //                     setIsLoggedIn(true);
    //                     navigate('/user/patient');
    //                 } else {
    //                     setIsLoggedIn(true);
    //                     navigate('/user/admin');                                    
    //                 }
    //             } else {
    //                 alert('Username, account type or password not correct !!!');
    //             }
    //         } else {
    //             alert('Username doesn\'t exist !!!');
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }

    return( 
        <div className='login'>
            <h1>Transfer Money</h1>
            <div className='mk-container'>
                <form className='login-card' name= "trform" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="uname">To</label>
                        <input type= "text" id="uname" name="uname" value={to}
                        onChange={onChangeFactory(setTo)} />
                    </div>
                    <div>
                        <label htmlFor="dec">Description</label>
                        <input type= "text" id="dec" name="dec" value={description}
                        onChange={onChangeFactory(setDescription)} />
                    </div>

                    <div>
                        <label htmlFor="amt">Amount</label>
                        <input type= "number" id="amt" name="amt" value={amount} 
                        onChange={onChangeFactory(setAmount)} />
                        {/* onChange={handleChange}/> */}
                    </div>

                    <div className="button-wrap">
                        <input type = "submit" value = "Transfer" ></input>
                        {/* onClick= {handleSubmit}></input> */}
                    </div>
                </form>   
            </div>
        </div>
    )
}

export default MakeTransfer;