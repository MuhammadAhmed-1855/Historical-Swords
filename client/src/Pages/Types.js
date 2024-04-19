import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateType from '../API/Type/Create';
import ViewAllTypes from '../API/Type/ViewAll';
import CustomizedTable from '../Components/CustomizedTable';
import NavBar from '../Components/NavBar';

const Types = () => {
    // Get user email and token from Redux store
    const userEmail = useSelector((state) => state.user.email);
    const userToken = useSelector((state) => state.user.token);

    const [types, setTypes] = useState([]);
    const [newType, setNewType] = useState({
        name: '',
        description: ''
    });
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

    useEffect(() => {
        // Function to fetch types
        const fetchTypes = async () => {
            try {
                // Fetch types data
                const typesAPI = await ViewAllTypes(userToken);
                console.log(typesAPI);
                setTypes(typesAPI);
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };

        // Call the fetchTypes function
        fetchTypes();
        
    }, [types, userToken]);

    // Function to handle adding type
    const handleAddType = (e) => {
        e.preventDefault();
        // Add your logic to handle adding type
        CreateType(newType, userToken);
        console.log('Type added');
        // Clear form fields after adding type
        setNewType({
            name: '',
            description: ''
        });
    };

    // Function to handle input change in add type form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewType(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Define table columns
    const columns = ['name', 'description'];

    return (
        <div>
            <NavBar />
            {/* Pass rows and columns to CustomizedTable component */}
            <CustomizedTable rows={types} columns={columns} />
            {userEmail === adminEmail && (
                <div style={{ backgroundColor: "#ffffff", width: '70%', marginLeft: '14%', marginBottom: '2rem', padding: '1rem', borderRadius: '8px' }}>
                    <Typography variant="h4" style={{ color: 'red', fontWeight: '900', marginBottom: '1rem', paddingLeft: '42%' }}>Add Type</Typography>
                
                    <form onSubmit={handleAddType}>
                        {/* Add form fields for adding type */}
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={newType.name}
                            onChange={handleInputChange}
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="description"
                            value={newType.description}
                            onChange={handleInputChange}
                            style={{ marginBottom: '1rem' }}
                        />
                        <Button type="submit" variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                            Add Type
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Types;
