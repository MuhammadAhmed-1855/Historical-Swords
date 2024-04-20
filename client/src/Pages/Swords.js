import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CreateSword from '../API/Sword/Create';
import ViewAllSwords from '../API/Sword/ViewAll';
import ViewAllEras from '../API/Era/ViewAll';
import ViewAllMakers from '../API/Maker/ViewAll';
import ViewAllMaterials from '../API/Material/ViewAll';
import ViewAllTypes from '../API/Type/ViewAll';
import Pagination from '@mui/material/Pagination';
import NavBar from '../Components/NavBar';
import SwordCard from '../Components/SwordCard';

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
        eraIDs: [],
        typeIDs: [],
        materialIDs: [],
        makerIDs: []
    });
    const [eras, setEras] = useState([]);
    const [makers, setMakers] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [types, setTypes] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage] = useState(3); // Set number of swords per page

    useEffect(() => {
        const fetchNamesFromIDs = async (Model, ids) => {
            try {
                // Filter out undefined values
                const names = (await Promise.all(Model.map(async (mod) => {
                    if (ids.includes(mod._id)) {
                        return mod.name;
                    }
                }))).filter(name => name !== undefined);
                return names;
            } catch (error) {
                console.error('Error fetching names:', error);
                throw error;
            }
        };
    
        const fetchData = async () => {
            try {
                const swordsAPI = await ViewAllSwords(userToken);
                const erasAPI = await ViewAllEras(userToken);
                const makersAPI = await ViewAllMakers(userToken);
                const materialsAPI = await ViewAllMaterials(userToken);
                const typesAPI = await ViewAllTypes(userToken);
    
                const swordNamed = await Promise.all(swordsAPI.map(async (sword) => {
                    const eraNames = await fetchNamesFromIDs(erasAPI, sword.eraIDs);
                    const typeNames = await fetchNamesFromIDs(typesAPI, sword.typeIDs);
                    const materialNames = await fetchNamesFromIDs(materialsAPI, sword.materialIDs);
                    const makerNames = await fetchNamesFromIDs(makersAPI, sword.makerIDs);
                    return {
                        ...sword,
                        eraNames: eraNames,
                        typeNames: typeNames,
                        materialNames: materialNames,
                        makerNames: makerNames
                    };
                }));
    
                // Set swords with swordNamed instead of swordsAPI
                setSwords(Array.isArray(swordNamed) ? swordNamed : []);
                setEras(erasAPI);
                setMakers(makersAPI);
                setMaterials(materialsAPI);
                setTypes(typesAPI);
    
                console.log('Data fetched');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [userToken]);
    
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, swords.length);
    const paginatedSwords = swords.slice(startIndex, endIndex);

    const handleAddSword = (e) => {
        e.preventDefault();
        CreateSword(newSword, userToken);
        console.log('Sword added');
        setNewSword({
            name: '',
            description: '',
            manufacturedYear: '',
            image: '',
            eraIDs: [],
            typeIDs: [],
            materialIDs: [],
            makerIDs: []
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSword(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
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
                
                    <div>
                        <Typography variant="h4" style={{ marginBottom: '1rem' }}>Swords</Typography>
                        <div className="swords-container">
                            {paginatedSwords.map((sword) => (
                                <SwordCard key={sword._id} sword={sword} />
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', backgroundColor: 'red', width: '50vw', marginLeft: '25vw' }}>
                            <Pagination count={Math.ceil(swords.length / perPage)} page={page} onChange={handleChangePage} />
                        </div>
                    </div>

                    {userEmail === adminEmail && (
                        <div style={{ backgroundColor: "#ffffff", width: '70%', marginLeft: '14%', marginBottom: '2rem', marginTop: '2rem', padding: '1rem', borderRadius: '8px' }}>
                            <Typography variant="h4" style={{ color: 'red', fontWeight: '900', marginBottom: '1rem', paddingLeft: '42%' }}>Add Sword</Typography>
                        
                            <form onSubmit={handleAddSword}>
                                <TextField 
                                    label="Name" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="name" 
                                    value={newSword.name} 
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField 
                                    label="Description" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="description" 
                                    value={newSword.description} 
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField 
                                    label="Manufactured Year" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="manufacturedYear" 
                                    value={newSword.manufacturedYear} 
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField 
                                    label="Image URL" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="image" 
                                    value={newSword.image} 
                                    onChange={handleInputChange}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField 
                                    select
                                    label="Era Name" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="eraIDs" 
                                    value={newSword.eraIDs} 
                                    onChange={handleInputChange}
                                    SelectProps={{ multiple: true }}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    {eras.map((era) => (
                                        <MenuItem key={era.id} value={era._id}>
                                            {era.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField 
                                    select
                                    label="Type Name" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="typeIDs" 
                                    value={newSword.typeIDs} 
                                    onChange={handleInputChange}
                                    SelectProps={{ multiple: true }}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    {types.map((type) => (
                                        <MenuItem key={type.id} value={type._id}>
                                            {type.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    select
                                    label="Material Name"
                                    variant="outlined"
                                    fullWidth
                                    name="materialIDs"
                                    value={newSword.materialIDs}
                                    onChange={handleInputChange}
                                    SelectProps={{ multiple: true }}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    {materials.map((material) => (
                                        <MenuItem key={material.id} value={material._id}>
                                            {material.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    select
                                    label="Maker Name"
                                    variant="outlined"
                                    fullWidth
                                    name="makerIDs"
                                    value={newSword.makerIDs}
                                    onChange={handleInputChange}
                                    SelectProps={{ multiple: true }}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    {makers.map((maker) => (
                                        <MenuItem key={maker.id} value={maker._id}>
                                            {maker.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <Button type="submit" variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                                    Add Sword
                                </Button>
                            </form>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Pagination count={Math.ceil(swords.length / perPage)} page={page} onChange={handleChangePage} />
                    </div>
                </>
            )}
            
            
        </div>
    );
};

export default Swords;
