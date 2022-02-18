import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

const rootclass="chat"

const users=[
    {
        name: "Wilson",
        first: "Alright! Fine with me"
    },
    {
        name: "Wilson",
        first: "Alright! Fine with me"
    },
    {
        name: "Wilson",
        first: "Alright! Fine with me"
    },
    {
        name: "Wilson",
        first: "Alright! Fine with me Alright! Fine with me Alright! Fine with me"
    },
]

const ChatApp = () =>  {
    const [values, setValues] = useState({
        active: {
            name: 'Wilson',
            img: '',
            messages:[]
        },
        search: '',
        compose: ''
    }) 

    const handleChange = (e) => {
        console.log(e.target.id)
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className={`${rootclass}`}>
            <div className={`${rootclass}-sidebar`}>
                <div className="form-input">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    <input
                        id='search'
                        type="text"
                        value={values.search}
                        placeholder='Search'
                        onChange={(e) => handleChange(e)}
                        maxLength={100}
                    />
                </div>
                <div className={`${rootclass}-sidebar-list`}>
                    {users.map((user, i) => {
                        return(
                            <div className={`${rootclass}-sidebar-list-item`} key={i}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                                <div className={`${rootclass}-sidebar-list-item-text`}>
                                    <p className={`${rootclass}-sidebar-list-item-text-name`}>{user.name}</p>
                                    <div className={`${rootclass}-sidebar-list-item-bottom`}>
                                        <p className={`${rootclass}-sidebar-list-item-text-description`}>{user.first.length>=30 ? `${user.first.slice(0, 30)}...` : user.first}</p>
                                        <p className={`${rootclass}-sidebar-list-item-text-time`}>10:30am</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${rootclass}-main`}>
                <div className={`${rootclass}-main-header`}>
                    <div className={`${rootclass}-main-header-user`}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                        <p>Wislon</p>
                    </div> 
                    <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                </div>
                <div className={`${rootclass}-main-window`}>
                    <p>chats</p>
                </div>
                <div className={`${rootclass}-main-textarea`}>
                    <div className="form-input">
                        <input
                            id='compose'
                            type="text"
                            value={values.compose}
                            placeholder='Write message...'
                            onChange={(e) => handleChange(e)}
                            maxLength={5000}
                        />
                    </div>
                    <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </div>
            </div>
        </div>

    );
};

export default ChatApp
