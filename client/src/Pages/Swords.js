import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateSword from '../API/Sword/Create';
import ViewAllSwords from '../API/Sword/ViewAll';
import CustomizedTable from '../Components/CustomizedTable';
import NavBar from '../Components/NavBar';

const Swords = () => {
    const userEmail = useSelector((state) => state.user.email);
    const userToken = useSelector((state) => state.user.token);

    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

    const [swords, setSwords] = useState([]);
    const [newSword, setNewSword] = useState({
        name: '',
        description: '',
        manufacturedYear: '',
        image: '',
        eraName: '',
        typeName: '',
        materialName: '',
        makerName: ''
    });

    useEffect(() => {
        const fetchSwords = async () => {
            try {
                const swordsAPI = await ViewAllSwords(userToken);
                setSwords(swordsAPI);
                console.log('Swords fetched');
            } catch (error) {
                console.error('Error fetching swords:', error);
            }
        };

        fetchSwords();
    }, [swords, userToken]);

    const handleAddSword = (e) => {
        e.preventDefault();
        CreateSword(newSword, userToken);
        console.log('Sword added');
        setNewSword({
            name: '',
            description: '',
            manufacturedYear: '',
            image: '',
            eraName: '',
            typeName: '',
            materialName: '',
            makerName: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSword(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const columns = ['name', 'description', 'manufacturedYear', 'image', 'eraName', 'typeName', 'materialName', 'makerName'];

    return (
        <div>
            <NavBar />
            <CustomizedTable rows={swords} columns={columns} />
            {userEmail === adminEmail && (
                <div style={{ backgroundColor: "white", width: '70%', marginLeft: '15%', marginBottom: '2rem' }}>
                    <form onSubmit={handleAddSword}>
                        <Typography variant="h4" style={{ backgroundColor: 'red', color: 'white', padding: '1rem', textAlign: 'center' }}>
                            Add Sword
                        </Typography>
                        <TextField 
                            label="Name" 
                            variant="outlined" 
                            fullWidth 
                            name="name" 
                            value={newSword.name} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Description" 
                            variant="outlined" 
                            fullWidth 
                            name="description" 
                            value={newSword.description} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Manufactured Year" 
                            variant="outlined" 
                            fullWidth 
                            name="manufacturedYear" 
                            value={newSword.manufacturedYear} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Image URL" 
                            variant="outlined" 
                            fullWidth 
                            name="image" 
                            value={newSword.image} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Era Name" 
                            variant="outlined" 
                            fullWidth 
                            name="eraName" 
                            value={newSword.eraName} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Type Name" 
                            variant="outlined" 
                            fullWidth 
                            name="typeName" 
                            value={newSword.typeName} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Material Name" 
                            variant="outlined" 
                            fullWidth 
                            name="materialName" 
                            value={newSword.materialName} 
                            onChange={handleInputChange} 
                        />
                        <TextField 
                            label="Maker Name" 
                            variant="outlined" 
                            fullWidth 
                            name="makerName" 
                            value={newSword.makerName} 
                            onChange={handleInputChange} 
                        />
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                            Add Sword
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Swords;
