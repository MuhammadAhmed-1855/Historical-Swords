import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateMaterial from '../API/Material/Create';
import ViewAllMaterials from '../API/Material/ViewAll';
import CustomizedTable from '../Components/CustomizedTable';
import NavBar from '../Components/NavBar';

const Materials = () => {
    // Get user email and token from Redux store
    const userEmail = useSelector((state) => state.user.email);
    const userToken = useSelector((state) => state.user.token);

    const [materials, setMaterials] = useState([]);
    const [newMaterial, setNewMaterial] = useState({
        name: '',
        description: '',
        origin: '',
        usage: ''
    });
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

    useEffect(() => {
        // Function to fetch materials
        const fetchMaterials = async () => {
            try {
                // Fetch materials data
                const materialsAPI = await ViewAllMaterials(userToken);
                setMaterials(materialsAPI);
            } catch (error) {
                console.error('Error fetching materials:', error);
            }
        };

        // Call the fetchMaterials function
        fetchMaterials();
        
    }, [materials, userToken, userEmail, adminEmail]);

    // Function to handle adding material
    const handleAddMaterial = (e) => {
        e.preventDefault();
        // Add your logic to handle adding material
        CreateMaterial(newMaterial, userToken);
        console.log('Material added');
        // Clear form fields after adding material
        setNewMaterial({
            name: '',
            description: ''
        });
    };

    // Function to handle input change in add material form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMaterial(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Define table columns
    const columns = ['name', 'description'];

    return (
        <div>
            {userEmail === "" && userToken === "" ? (
                <>
                    <iframe
                        src="https://lottie.host/embed/1735cc84-8331-411b-9839-ec699469defc/EYzL2DAfWT.json"
                        height='500vh'
                        width='100%'
                        frameBorder='none'
                        title='Login First'
                    ></iframe>

                    <Button
                        href='/'
                        variant='contained'
                        color='primary'
                        sx={{ width: '20vw', marginLeft: '40vw' }}
                    >
                        Login To View
                    </Button>
                </>
                
            ) : (
                <>
                    <NavBar />
                    {/* Pass rows and columns to CustomizedTable component */}
                    <CustomizedTable rows={materials} columns={columns} />
                    {userEmail === adminEmail && (
                        <div style={{ backgroundColor: "#ffffff", width: '70%', marginLeft: '14%', marginBottom: '2rem', padding: '1rem', borderRadius: '8px' }}>
                            <Typography variant="h4" style={{ color: 'red', fontWeight: '900', marginBottom: '1rem', paddingLeft: '39%' }}>Add Material</Typography>
                        
                            <form onSubmit={handleAddMaterial}>
                                {/* Add form fields for adding material */}
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    value={newMaterial.name}
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    name="description"
                                    value={newMaterial.description}
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <Button type="submit" variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                                    Add Material
                                </Button>
                            </form>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Materials;
