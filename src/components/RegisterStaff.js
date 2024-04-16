
/*import React, { useState } from 'react';
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
    const navigate = useNavigate();

    const handlePlaceHolder = () => {
        navigate('/place-order');
    };

   const handleViewDetails = async (id) => {
    try {
        const response = await axios.get(http://localhost:4000/api/v1/staff/${id});
        setViewDetails(response.data);
        console.log("Response data:", response.data);
    } catch (error) {
        console.log("Error fetching staff details:", error);
    }
};



    const handleEdit = async(id) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/staff/${id}`, {
                params: formValues // Pass formValues as query parameters if needed
            });
            console.log("Staff details updated:", response.data);
        } catch (error) {
            console.log("Error updating staff details:", error);
        }
        
       
        const handleDelete = async() => {
            try {
                await axios.delete("http://localhost:4000/api/v1/deleteStaff");
            setViewDetails(false);
            setFormValues({
                FirstName: "",
                LastName: "",
                location: "",
                workingHOurs: "",
                checkBox: "false"
            });
        }
        catch(error){
            console.log("Error deleting staff details",error)

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
    )
}
}
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
    const navigate = useNavigate();

    const handlePlaceHolder = () => {
        navigate('/place-order');
    };

    const handleViewDetails = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/staff/${id}`);
            setViewDetails(response.data);
            console.log("Response data:", response.data);
        } catch (error) {
            console.log("Error fetching staff details:", error);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/v1/staff/${id}`, formValues);
            console.log("Staff details updated:", response.data);
        } catch (error) {
            console.log("Error updating staff details:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete("http://localhost:4000/api/v1/deleteStaff");
            setViewDetails(false);
            setFormValues({
                FirstName: "",
                LastName: "",
                location: "",
                workingHours: "",
                checkBox: false
            });
        } catch(error){
            console.log("Error deleting staff details", error);
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
            <label htmlFor="checkbox">Availability</label>
            <input
                type="checkbox"
                checked={formValues.checkBox}
                onChange={(e) => setFormValues({ ...formValues, checkBox: e.target.checked })}
                name="checkbox"
            />
            <button onClick={() => handleViewDetails(viewDetails._id)}>VIEW YOUR DETAILS</button>
            {viewDetails && (
                <div>
                    <h2>Your Details:</h2>
                    <p>FirstName: {viewDetails.FirstName}</p>
                    <p>LastName: {viewDetails.LastName}</p>
                    <p>Location: {viewDetails.location}</p>
                    <p>Working Hours: {viewDetails.workingHours}</p>
                    <button onClick={() => handleEdit(viewDetails._id)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            <button onClick={handlePlaceHolder}>PLACE YOUR ORDER</button>
        </div>
    );
};
