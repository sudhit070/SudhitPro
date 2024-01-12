import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { store } from '../../_store/store';
import { sayHello, sendMessage, deleteMessage } from '../../_store/Actions/skypeaction';

const Skypey = () => {

    const { user, messages } = useSelector((state) => state);

    const activeuserid = user.user_id, senderMessages = messages[activeuserid];
    const chatContainer = React.useRef(null);

    React.useEffect(() => {
        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }, [])


    const sayHdello = (e) => {
        let msg = {
            msg: 'Hello!',
            user_id: user.user_id
        };
        store.dispatch(sayHello(msg))
    }

    const sendMesssage = (e) => {
        e.preventDefault();

        let sendmes = {
            user_id: user.user_id,
            newmsg: e.target.elements.message.value
        }

        e.target.reset();
        store.dispatch(sendMessage(sendmes))
        setTimeout(() => {chatContainer.current.scrollTop = chatContainer.current.scrollHeight;}, 10);
    }


    const deletseMessage = (number) => {
        
        let userdeletedata = {
            use_id: user.user_id,
            msgIndex: number,
        }

        store.dispatch(deleteMessage(userdeletedata))
    }


    return (
        <div className='mainboxcontent'>
            <div className='skypey'>

                <div className='userchat'>
                    <div className='userprofile'>
                        <h3 className='name'>{user.name}</h3>
                        <h6 className='bio'>{user.status}</h6>
                    </div>

                    <div className='msg-boxes' ref={chatContainer}>

                        {
                            _.values(senderMessages).length > 0 ?
                                <ul className='msg-ul'>
                                    {
                                        _.values(senderMessages).map((msg) => (
                                            <li className={`msgliitem ${msg.is_user_msg ? 'user' : ''}`}>
                                                {msg.text}
                                                {msg.is_user_msg && <a href='javascript:void(0)' className='msg-close' onClick={()=> deletseMessage(msg.number)}><i class="fas fa-times"></i></a>}
                                            </li>
                                        ))
                                    }

                                </ul>
                                : <div className='text-center mb-5'>
                                    <a href='javascript:void(0)' className='btn btn-primary no-animate' onClick={sayHdello}>Say to Hello!</a>
                                </div>
                        }

                    </div>
                </div>

                <form onSubmit={sendMesssage} className='inputtabs'>
                    <input type='text' className='form-control' name='message' />
                    <button className='btn btn-primary no-animate' type='submit'><i class="fas fa-paper-plane" ></i></button>
                </form>
            </div>
        </div>
    )
}

export default Skypey;