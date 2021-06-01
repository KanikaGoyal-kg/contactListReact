import React, { useState } from 'react';
import {Button, Input} from 'antd';

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
        <div className="table-div">
        <div className="button-div">
        <Button className="button-style" type="primary" onClick={addContacts}>Add Contacts</Button>
        </div>
        <table class="table-div">

          <caption class="caption-style">
            Contact details
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country code</th>
              <th>Mobile number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="addContactList">
            {/* <script>
              let contactInfo = localStorage.getItem("localtask");
              if (contactInfo == null) {
                contactDetails = [];
              } else {
                contactDetails = JSON.parse(contactInfo);
              }
              let i;
              editdeleteupdate(contactDetails);
            </script> */}
          </tbody>
        </table>
        <div>

        { enterDetails.map((itemVal, index) => { 
            return (
            <div style={{display: 'flex'}} key={index}>
            <div style={{paddingRight: '18%'}}>
                {itemVal.fname} {itemVal.lname}
            </div>
            <div style={{paddingRight: '18%'}}>
                {itemVal.countrycode}
            </div>
            <div style={{paddingRight: '18%'}}>
                {itemVal.mobilenumber}
            </div>
            <div onClick={() => toEditDetails(itemVal)}>Edit</div>
            <div onClick={() => toRemoveDetails(itemVal)} id="deleteDetails">Remove</div>
            </div>
            )
        })}
        </div>

        {isModalVisible ?
        <form className="div" >
            <div>
                <h4>Enter Details</h4>
            </div>
            <div className="input-main-div">
            <div>
                <Input onChange={inputEvent} className="name-div" value={contactDetails.fname}  name="fname" type="text" placeholder="Enter you first name" />
            </div>
            <div>
                <Input type="text" className="name-div" onChange={inputEvent} value={contactDetails.lname} name="lname" placeholder="Enter you last name" />
            </div>
            <div>
                <Input type="text" className="code-div" onChange={inputEvent} value={contactDetails.countrycode}  name="countrycode" placeholder="Enter you country code" />
                <Input type="text" className="number-div" onChange={inputEvent} value={contactDetails.mobilenumber} name="mobilenumber" placeholder="Enter you mobile number" /> 

            </div>
            </div>
            <div>
            {isSaveButton ?
                <button type="primary" className="button" onClick={saveForm}>Save</button>

                :
                <button type="primary" className="button" onClick={submitForm}>Submit</button>

            }

            </div>
        </form>
        : null }
      </div>
    )
}

export default ContactList;