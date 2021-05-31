import React, { useState } from 'react';
import {Button} from 'antd';

const ContactList = () => {

    const[isModalVisible, setIsModalVisible] = useState(false);
    const[contactDetails, setContactDetails] = useState({
        fname: "",
        lname:"",
        countrycode: "",
        mobilenumber: "",
        id: 0
    });
    const[enterDetails, setEnterDetails] = useState([]);
    const [isSaveButton, setIsSaveButton] = useState(false);

    const addContacts = () => {
        setIsModalVisible(true);
    }

    const inputEvent = (event) => {

        const {value, name} = event.target
        setContactDetails({
            ...contactDetails,
            [name]: value
        });
    }

    const toRemoveDetails = (deleteDetails) => {
        // const removetodo = enterDetails.findIndex(itemVal => itemVal.id === contactDetails.id )
        // const removeParticularDetail= enterDetails.splice(removetodo, 1)
        const removetodo = enterDetails.filter(itemVal => itemVal.id === deleteDetails.id)
        setEnterDetails(removetodo)
        // console.log(removeParticularDetail);
      
    }

    const toEditDetails = (itemVal) => {
        setIsModalVisible(true);
        console.log(itemVal);
        setContactDetails(itemVal);
        setIsSaveButton(true);
    
    }

    const saveForm =(event) =>{
        event.preventDefault();
        if (contactDetails.fname === "") {
            alert('Please enter your first name')
        } else if (contactDetails.lname === "") {
            alert('Please enter your last name')
        } else if (contactDetails.countrycode === "") {
            alert('Please enter your country code')
        } else if (contactDetails.mobilenumber === "") {
            alert('Please enter your mobile number')
        } else {

           const editedDetails = enterDetails.findIndex(itemVal => itemVal.id === contactDetails.id )
               let previousEnterDetails = [...enterDetails] 
                previousEnterDetails[editedDetails].fname = contactDetails.fname
                previousEnterDetails[editedDetails].lname =contactDetails.lname
                previousEnterDetails[editedDetails].countrycode = contactDetails.countrycode
                previousEnterDetails[editedDetails].mobilenumber = contactDetails.mobilenumber
                
               console.log(previousEnterDetails)
           setEnterDetails(previousEnterDetails)
           alert('Form edited')
      
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (contactDetails.fname === "") {
            alert('Please enter your first name')
        } else if (contactDetails.lname === "") {
            alert('Please enter your last name')
        } else if (contactDetails.countrycode === "") {
            alert('Please enter your country code')
        } else if (contactDetails.mobilenumber === "") {
            alert('Please enter your mobile number')
        } else {
            const editValuePush = {...contactDetails, id: Math.random()}
            enterDetails.push(editValuePush)
        alert('Form submitted')
        setContactDetails({ 
            fname: "",
            lname: "",
            countrycode: "",
            mobilenumber: "", 
            id: 0
         });
        }

    }
    
    return (
        <div style={{width: '100%'}}>
        <div>
        { enterDetails.map((itemVal, index) => { 
            return (
            <div key={index}>
            <div>
                {itemVal.fname} {itemVal.lname}
            </div>
            <div>
                {itemVal.countrycode}
            </div>
            <div>
                {itemVal.mobilenumber}
            </div>
            <div onClick={() => toEditDetails(itemVal)}>Edit</div>
            <div onClick={() => toRemoveDetails(itemVal)} id="deleteDetails">Remove</div>
            </div>
            )
        })}
            <Button type="primary" onClick={addContacts}>Add Contacts</Button>
        </div>

        {isModalVisible ?
        <form className="div" >
            <div>
                <h4>Enter Details</h4>
            </div>
            <div className="input-main-div">
            <div>
                <input onChange={inputEvent} value={contactDetails.fname}  name="fname" type="text" placeholder="Enter you first name" />
            </div>
            <div>
                <input type="text" onChange={inputEvent} value={contactDetails.lname} name="lname" placeholder="Enter you last name" />
            </div>
            <div>
                <input type="text" onChange={inputEvent} value={contactDetails.countrycode}  name="countrycode" placeholder="Enter you country code" />
                <input type="text" onChange={inputEvent} value={contactDetails.mobilenumber} name="mobilenumber" placeholder="Enter you mobile number" /> 

            </div>
            </div>
            <div>
            {isSaveButton ?
                <button type="primary" onClick={saveForm}>Save</button>

                :
                <button type="primary" onClick={submitForm}>Submit</button>

            }

            </div>
        </form>
        : null }
      </div>
    )
}

export default ContactList;