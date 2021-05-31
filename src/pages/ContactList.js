import React, { useState } from 'react';
import {Button, Modal} from 'antd';

const ContactList = () => {

    const[isModalVisible, setIsModalVisible] = useState(false);

    const addContacts = () => {
        alert('ijel');
        setIsModalVisible(true);
    }
    
    return (
        <div style={{width: '100%'}}>
        <div>
            <Button type="primary" onClick={addContacts}>Add Contacts</Button>
        </div>

        {isModalVisible ?
        <div>
            <div>
                <h4>Contact Details</h4>
            </div>
            <div>
                <input type="text" placeholder="Enter you first name" />
            </div>
            <div>
                <input type="text" placeholder="Enter you last name" />
            </div>
            <div>
                <input type="text" placeholder="Enter you country code" />
                <input type="text" placeholder="Enter you mobile number" />

            </div>
        </div>
        : null }
        
        {/* <div style={{width: '100% !important'}}>
        <Modal title="Basic Modal" className="modal-div"  visible={isModalVisible} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        
      </Modal>
      </div> */}
      </div>
    )
}

export default ContactList;