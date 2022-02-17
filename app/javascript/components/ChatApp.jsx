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
        searchName: ''
    }) 

    const handleChange = (e) => {
        setValues({
            ...values,
            searchName: e.target.value
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
                        value={values.searchName}
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

            </div>
        </div>

    );
};

export default ChatApp
