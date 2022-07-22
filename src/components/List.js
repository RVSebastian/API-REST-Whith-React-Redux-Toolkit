import React , { useEffect } from 'react'
// importamos el redux
import { fetchAllUsers } from '../store/slices/users';
import { useDispatch , useSelector } from 'react-redux'

const Userlist = () => {

    const { list: users } = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    },[dispatch])
    


    return (
        <div className='container'>
            <div className='row'>
                {
                    users.map((user, index) => (
                        <div key={index} className='col-md-3 mt-2'>
                            <div className='card shadow' style={{width:'250px'}}>
                                <img src={user.avatar} alt={user.avatar}  />
                                <div className='card-body text-center bg-dark text-light'>
                                    <h5 className='card-title'>{user.first_name} {user.last_name}</h5>
                                    <p className='card-text'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Userlist