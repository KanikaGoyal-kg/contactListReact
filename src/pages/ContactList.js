import React from 'react';
import {Button} from 'antd';
import {useHistory} from 'react-router';

const ContactList = () => {

    const history = useHistory();

    const addContacts = () => {
        history.push('/modal')
    }
    console.log(history.push)

    return (
        <div>
            <Button type="primary" onclick={addContacts}>Add Contacts</Button>
        </div>
    )
}

export default ContactList;