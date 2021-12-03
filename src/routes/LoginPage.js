import React ,{useState , useRef} from 'react';
import {
    Box,
    OutlinedInput,
    InputAdornment,
    FormControl,
    InputLabel,
    Button,
    Snackbar,
    Typography,
    styled
} from '@mui/material';

import {
    Email,
    Lock,
    Visibility,
    VisibilityOff,
    Login
} from '@mui/icons-material';

import style from '../styles/Registration.module.css';
import Alert from '../components/Alert';

import {Link, useHistory} from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const OutlinedTextInput = styled(OutlinedInput)({
    "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
        borderColor: "#0088a9"
    },
});

const Label = styled(InputLabel)({
    "&.MuiinputLabel-root.Mui-focused" :{
        borderColor: "#df5689"
    },
});

const LoginButton = styled(Button)({
    backgroundColor: "#434569",
    "&:hover" : { 
        backgroundColor : "#434569" 
    },
});


export default function LoginPage(props) {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPAsswordvisible, setIsPasswordVisible] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const snackbarMessage = useRef("");

    const login = ()=>{
        if(!email || !password){
            // alert('invalid')
            snackbarMessage.current = "email or password is empty";
            setShowSnackbar(true);
            return; 
        }
        signInWithEmailAndPassword(getAuth() , email, password )
            .then((userCredentials)=>{
                history.push("/")
            })
            .catch((error)=>{
                snackbarMessage.current = error.message;
                setShowSnackbar(true);
                console.log(error);
                return; 
                }
            );
    }

    return (
    
        <Box className={style.box}>
            <Typography variant="h4">Login</Typography>
            <FormControl className={style.formControl}>
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput 
                id="outlined-adornment-amount"
                value={email}
                type='email'
                onChange={(event)=>{ setEmail(event.target.value)} }
                startAdornment={
                    <InputAdornment position='start'>
                        <Email />
                    </InputAdornment>
                }
                label='Email'
                required
                ></OutlinedInput>
            </FormControl>

            <FormControl className={style.formControl}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedTextInput 
                id="outlined-adornment-amount"
                value={password}
                type={ isPAsswordvisible ? "text" : "password"}
                onChange={(event)=>{ setPassword(event.target.value)} }
                startAdornment={
                    <InputAdornment position='start'>
                        <Lock />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position='end'>
                       {isPAsswordvisible ? 
                        ( <Visibility className={style.passwordIcon} 
                            onClick= { () => setIsPasswordVisible( (prev) => !prev ) } /> 
                            ) : 
                        ( <VisibilityOff className={style.passwordIcon} 
                            onClick= { () => setIsPasswordVisible( (prev) => !prev ) }/> )
                       }  
                    </InputAdornment>
                }
                label='Password'
                required
                ></OutlinedTextInput>
            </FormControl>
            <Box className={style.loginButton}>
                <LoginButton fullWidth variant="contained" startIcon={<Login />} 
                onClick={login}>Login</LoginButton>
            </Box>
            <Box className={style.signupButton}>
                <Typography variant="subtitle1">
                    Don't have an account?
                    <span className={style.spacing}></span>
                    <Link to="/signup">Signup now</Link>
                </Typography>
            </Box>
            <Snackbar 
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={()=>setShowSnackbar(false)}
                anchorOrigin={{vertical:'top', horizontal: 'right'}}
                key={`top + right`} >
                <Alert onClose={()=>setShowSnackbar(false)} sx={{width:"100%"}}> 
                    {snackbarMessage.current}
                </Alert>
            </Snackbar>
        </Box>
    )
}