import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateEra from '../API/Era/Create';
import ViewAllEras from '../API/Era/ViewAll';
import CustomizedTable from '../Components/CustomizedTable';
import NavBar from '../Components/NavBar';

const Eras = () => {
    // Get user email and token from Redux store
    const userEmail = useSelector((state) => state.user.email);
    const userToken = useSelector((state) => state.user.token);

    const [eras, setEras] = useState([]);
    const [newEra, setNewEra] = useState({
        name: '',
        description: '',
        startYear: '',
        endYear: ''
    });
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

    useEffect(() => {
        // Function to fetch eras
        const fetchEras = async () => {
            try {
                // Fetch eras data
                const erasAPI = await ViewAllEras(userToken);
                setEras(erasAPI);
            } catch (error) {
                console.error('Error fetching eras:', error);
            }
        };

        // Call the fetchEras function
        fetchEras();
        
    }, [eras, userToken]);

    // Function to handle adding era
    const handleAddEra = (e) => {
        e.preventDefault();
        // Add your logic to handle adding era
        CreateEra(newEra, userToken);
        console.log('Era added');
        // Clear form fields after adding era
        setNewEra({
            name: '',
            description: '',
            startYear: '',
            endYear: ''
        });
    };

    // Function to handle input change in add era form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEra(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Define table columns
    const columns = ['name', 'description', 'startYear', 'endYear'];

    return (
        <div>
            <NavBar />
            {/* Pass rows and columns to CustomizedTable component */}
            <CustomizedTable rows={eras} columns={columns} />
            {userEmail === adminEmail && (
              <div style={{ backgroundColor: "#ffffff", width: '70%', marginLeft: '14%', marginBottom: '2rem', padding: '1rem', borderRadius: '8px' }}>
                  <Typography variant="h4" style={{ color: 'red', fontWeight: '900', marginBottom: '1rem', paddingLeft: '42%' }}>Add Era</Typography>
                  <form onSubmit={handleAddEra}>
                      {/* Add form fields for adding era */}
                      <TextField
                          label="Name"
                          variant="outlined"
                          fullWidth
                          name="name"
                          value={newEra.name}
                          onChange={handleInputChange}
                          style={{ marginBottom: '1rem' }}
                      />
                      <TextField
                          label="Description"
                          variant="outlined"
                          fullWidth
                          name="description"
                          value={newEra.description}
                          onChange={handleInputChange}
                          style={{ marginBottom: '1rem' }}
                      />
                      <TextField
                          label="Start Year"
                          variant="outlined"
                          fullWidth
                          name="startYear"
                          value={newEra.startYear}
                          onChange={handleInputChange}
                          style={{ marginBottom: '1rem' }}
                      />
                      <TextField
                          label="End Year"
                          variant="outlined"
                          fullWidth
                          name="endYear"
                          value={newEra.endYear}
                          onChange={handleInputChange}
                          style={{ marginBottom: '1rem' }}
                      />
                      <Button type="submit" variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                          Add Era
                      </Button>
                  </form>
              </div>
          )}
        </div>
    );
};

export default Eras;
