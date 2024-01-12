import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { setActiveUser } from '../../_store/Actions/skypeaction'
import { store } from '../../_store/store'

export const Totalskypeuser = () => {

    let { contacts, user, messages } = useSelector((state) => state);

    const setactiveuser = (userId) => {
        store.dispatch(setActiveUser(contacts[userId]))
    }

    return (
        <div className='skuserlist'>
            {
                _.values(contacts).map((item) => (
                    <a href='javascript:void(0)' onClick={() => setactiveuser(item.user_id)} className={`skuser ${item.user_id == user.user_id && 'active'}`}>
                        <div className='profile'>
                            <img src={item.profile_pic} alt='profile pic' />
                        </div>
                        <div className='skcontetn'>
                            <h4 className='name'>{item.name}</h4>
                            {
                                messages[item.user_id] ?
                                    <p className='desc'>
                                        {/* {console.log('hello')} */}
                                        {_.values(messages[item.user_id])[_.values(messages[item.user_id]).length - 1].is_user_msg ? `You: ${_.values(messages[item.user_id])[_.values(messages[item.user_id]).length - 1].text}` : _.values(messages[item.user_id])[_.values(messages[item.user_id]).length - 1].text}
                                    </p> :
                                    <p className='desc'>Start conversation with this contact!</p>
                            }
                        </div>
                    </a>
                ))
            }

            {/* <a href='javascript:void(0)' className='skuser active'>
                <div className='profile'>
                    <img src='https://picsum.photos/id/230/200/300' alt='profile pic' />
                </div>
                <div className='skcontetn'>
                    <h4 className='name'>Mr. Amissa Dare</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </a>
            <a href='javascript:void(0)' className='skuser'>
                <div className='profile'>
                    <img src='https://picsum.photos/id/239/200/300' alt='profile pic' />
                </div>
                <div className='skcontetn'>
                    <h4 className='name'>Mr. Amissa Dare</h4>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </a> */}
        </div>
    )
}
