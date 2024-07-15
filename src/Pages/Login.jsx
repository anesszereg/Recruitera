import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Link, Button } from '@mui/material';
import background_image from '../assets/images/background.png';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/userSlice'; // Adjust the path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        gap: '7%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        height: '90%',
        paddingTop: '50px',
        gap: '40px',
    }
});

function Login() {
    const navigate = useNavigate();
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');

    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            navigate('/Dashboard/Employes'); 
            toast("Wow so easy!");// Adjust the path as necessary
        }
    }, [user, navigate]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = () => {
        if (!email || !password) {
            setFormError('Email and password must not be empty.');
            return;
        }
        if (!validateEmail(email)) {
            setFormError('Please enter a valid email address.');
            return;
        }

        setFormError('');
        dispatch(loginUser(email, password));
    };

    return (
        <div className={classes.container}>
            <Box
                sx={{
                    backgroundImage: `url(${background_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '90%',
                    width: '50%',
                    borderRadius: '16px',
                }}
            >
                <img src="" alt="" />
            </Box>
            <div className={classes.form}>
                <Box width={'70%'}>
                    <Typography fontSize={'30px'} fontWeight={'bold'} color={'#000'}>Connexion</Typography>
                    <Typography fontSize={'12px'} fontWeight={'500'} color={"#7e7e7e"}>Pour créer un compte, veuillez contacter le service d'assistance</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Typography variant="body1" color="initial">Email:</Typography>
                        <TextField
                            id="outlined-basic"
                            label=""
                            value={email}
                            placeholder='Email@example.com'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!formError && !validateEmail(email)}
                            helperText={!!formError && !validateEmail(email) ? formError : ''}
                        />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Typography variant="body1" color="initial">mot de pass :</Typography>
                        <TextField
                            id="outlined-basic"
                            label=""
                            value={password}
                            placeholder='*********'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!formError && !password}
                            helperText={!!formError && !password ? formError : ''}
                        />
                        <Link href="#" underline="always" variant='body2' color={'#7E7E7E'}>Mot de passe oublié ?</Link>
                    </Box>
                </Box>
                <Button
                    sx={{
                        height: '50px',
                        backgroundColor: '#00414A',
                        color: "#fff",
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 65, 74, 0.76)',
                            color: "#fff",
                        }
                    }}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Chargement...' : 'Se connecter'}
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                {formError && <Typography color="error">{formError}</Typography>}
                <Box textAlign={'center'}>
                    <Link href="##" fontSize={'14px'} underline='always' color="#000">Contacter le service d’assistance ici</Link>
                </Box>
                <ToastContainer />
            </div>
           
        </div>
    );
}

export default Login;
