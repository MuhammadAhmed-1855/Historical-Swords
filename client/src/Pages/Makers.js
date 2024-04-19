import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateMaker from '../API/Maker/Create';
import ViewAllMakers from '../API/Maker/ViewAll';
import CustomizedTable from '../Components/CustomizedTable';
import NavBar from '../Components/NavBar';

const Makers = () => {
    // Get user email and token from Redux store
    const userEmail = useSelector((state) => state.user.email);
    const userToken = useSelector((state) => state.user.token);

    const [makers, setMakers] = useState([]);
    const [newMaker, setNewMaker] = useState({
        name: '',
        description: ''
    });
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

    useEffect(() => {
        // Function to fetch makers
        const fetchMakers = async () => {
            try {
                // Fetch makers data
                const makersAPI = await ViewAllMakers(userToken);
                setMakers(makersAPI);
            } catch (error) {
                console.error('Error fetching makers:', error);
            }
        };

        // Call the fetchMakers function
        fetchMakers();
        
    }, [makers, userToken, userEmail, adminEmail]);

    // Function to handle adding maker
    const handleAddMaker = (e) => {
        e.preventDefault();
        // Add your logic to handle adding maker
        CreateMaker(newMaker, userToken);
        console.log('Maker added');
        // Clear form fields after adding maker
        setNewMaker({
            name: '',
            description: ''
        });
    };

    // Function to handle input change in add maker form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMaker(prevState => ({
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
            <CustomizedTable rows={makers} columns={columns} />
            {userEmail === adminEmail && (
                <div style={{ backgroundColor: "#ffffff", width: '70%', marginLeft: '14%', marginBottom: '2rem', padding: '1rem', borderRadius: '8px' }}>
                    <Typography variant="h4" style={{ color: 'red', fontWeight: '900', marginBottom: '1rem', paddingLeft: '42%' }}>Add Maker</Typography>
                    
                    <form onSubmit={handleAddMaker}>
                        {/* Add form fields for adding maker */}
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={newMaker.name}
                            onChange={handleInputChange}
                            style={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="description"
                            value={newMaker.description}
                            onChange={handleInputChange}
                            style={{ marginBottom: '1rem' }}
                        />
                        <Button type="submit" variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                            Add Maker
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Makers;
