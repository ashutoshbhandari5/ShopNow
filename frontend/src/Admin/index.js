import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { userLogout } from '../actions/loginAction'
import {useSelector, useDispatch} from 'react-redux';

const Index = ({history}) => {
    const dispatch = useDispatch();

    const user = useSelector((state)=> state.userLogin)
  
    const {userInfo} = user;


    const adminLogout=()=>{
        dispatch(userLogout());
        history.push('/')
    }

    useEffect(() => {
     if(!user || (user && !userInfo?.isAdmin)){
         history.push('/')
     }
  
    }, [user,userInfo,history])
    return (
        <>
           <div className={classes.container}>
              <div className={classes.glass}>
                  <div className={classes.dashboard}>
                      <div className={classes.item}>
                      <button onClick={adminLogout} className={classes.btn}>
              Log Out
            </button>
                      </div>
                  </div>
                  <div className={classes.main}>
                      <h3>Manage</h3>
                      <div className={classes.visit}>
                              <Link className={classes.link} to='/products'> 
                              <div className={classes.group}
                              ><h3>Products</h3>
                              </div>
                              </Link>
                              <Link className={classes.link} to='/users'> 
                              <div className={classes.group}
                              ><h3>Users</h3>
                              </div>
                              </Link>
                        
                      </div>
                  </div>
              </div>
           </div>
        </>
    )
}

export default Index
