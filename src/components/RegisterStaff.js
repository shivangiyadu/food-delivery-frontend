/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterStaff = () => {
    const [formValues, setFormValues] = useState({
        FirstName: "",
        LastName: "",
        location: "",
        workingHours: "",
        checkBox: false
    });
    const [viewDetails, setViewDetails] = useState(null);
    const navigate = useNavigate();

    const handlePlaceHolder = () => {
        navigate('/place-order');
    };

    const handleViewDetails = async() => {
        try {
            const response = await axios.get("http://localhost:4000/api/v1/staff/details");
            setViewDetails(response.data);
        } catch (error) {
            console.log("Error fetching staff details:", error);
        }
    };
    };

    const handleEdit = () => {
        try {
            const response = await axios.put("http://localhost:4000/api/v1/staff/edit", formValues);
            console.log("Staff details updated:", response.data);
        } catch (error) {
            console.log("Error updating staff details:", error);
        }
    };
       
        console.log("Edit button clicked");
    };
        const handleDelete = () => {
            setViewDetails(false);
            setFormValues({
                FirstName: "",
                LastName: "",
                location: "",
                workingHOurs: "",
                checkBox: "false"
            });
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            flexDirection: "column"
        }}>
            <h1>ADD THE DETAILS OF THE STAFF</h1>
            <input
                value={formValues.FirstName}
                onChange={(e) => setFormValues({ ...formValues, FirstName: e.target.value })}
                type="text"
                placeholder='FirstName'
            />
            <br />
            <input
                value={formValues.LastName}
                onChange={(e) => setFormValues({ ...formValues, LastName: e.target.value })}
                type="text"
                placeholder='LastName'
            />
            <br />
            <input
                value={formValues.location}
                onChange={(e) => setFormValues({ ...formValues, location: e.target.value })}
                type="text"
                placeholder='Location'
            />
            <br />
            <input
                value={formValues.workingHours}
                onChange={(e) => setFormValues({ ...formValues, workingHours: e.target.value })}
                type="text"
                placeholder='Working hours'
            />
            <br />
            <label htmlFor="checkbox">Availablity</label>
            <input type="checkbox" placeholder='LastName' name="checkbox" />
            <button onClick={handleViewDetails}>VIEW YOUR DETAILS</button>
            {viewDetails && (
                <div>
                    <h2>Your Details:</h2>
                    <p>FirstName: {viewDetails.FirstName}</p>
                    <p>LastName: {viewDetails.LastName}</p>
                    <p>Location: {viewDetails.location}</p>
                    <p>Working Hours: {viewDetails.workingHours}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            <button onClick={handlePlaceHolder}>PLACE YOUR ORDER</button>
        </div>
    );
};
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const RegisterStaff = () => {
    const [formValues, setFormValues] = useState({
        FirstName: "",
        LastName: "",
        location: "",
        workingHours: "",
        checkBox: false
    });
    const [viewDetails, setViewDetails] = useState(null);
    const [staffId, setStaffId] = useState(null); // Add state for staff ID
    const navigate = useNavigate();

    const handlePlaceHolder = () => {
        navigate('/place-order');
    };

    const handleViewDetails = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/v1/staff/details");
            setViewDetails(response.data);
            setStaffId(response.data._id); // Set staffId when fetching details
        } catch (error) {
            console.log("Error fetching staff details:", error);
        }
    };

    const handleEdit = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/api/v1/update/staff/${staffId}`, formValues); // Use /update/staff/:id route
            console.log("Staff details updated:", response.data);
        } catch (error) {
            console.log("Error updating staff details:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/v1/deleteStaff/${staffId}`); // Use /deleteStaff/:id route
            setViewDetails(false);
            setFormValues({
                FirstName: "",
                LastName: "",
                location: "",
                workingHours: "",
                checkBox: false
            });
        } catch (err) {
            console.log("Error deleting staff details", err);
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            flexDirection: "column"
        }}>
            <h1>ADD THE DETAILS OF THE STAFF</h1>
            {/* Input fields for FirstName, LastName, location, workingHours, and checkbox */}
            <button onClick={handleViewDetails}>VIEW YOUR DETAILS</button>
            {viewDetails && (
                <div>
                    
                    <h2>Your Details:</h2>
                    <p>FirstName: {viewDetails.FirstName}</p>
                    <p>LastName: {viewDetails.LastName}</p>
                    <p>Location: {viewDetails.location}</p>
                    <p>Working Hours: {viewDetails.workingHours}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                  
            )}
            <button onClick={handlePlaceHolder}>PLACE YOUR ORDER</button>
        </div>
    );
};
