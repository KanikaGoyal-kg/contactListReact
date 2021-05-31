import React, { useState } from 'react';
import {Button, Input} from 'antd';

const ContactList = () => {

    const[isModalVisible, setIsModalVisible] = useState(false);

    const addContacts = () => {
        alert('ijel');
        setIsModalVisible(true);
    }

    const submitForm = () => {
        setIsModalVisible(false);
    }
    
    return (
        <div style={{width: '100%'}}>
        <div>
            <Button type="primary" onClick={addContacts}>Add Contacts</Button>
        </div>

        {isModalVisible ?
        <form className="div">
            <div>
                <h4>Enter Details</h4>
            </div>
            <div className="input-main-div">
            <div>
                <input type="text" placeholder="Enter you first name" />
            </div>
            <div>
                <input type="text" placeholder="Enter you last name" />
            </div>
            <div>
                {/* <Input addonBefore="+" defaultValue="Enter you mobile number" /> */}
                 <input type="text" placeholder="Enter you country code" />
                <input type="text" placeholder="Enter you mobile number" /> 

            </div>
            </div>
            <div>
                <button onClick={submitForm} type="primary">Submit</button>
            </div>
        </form>
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