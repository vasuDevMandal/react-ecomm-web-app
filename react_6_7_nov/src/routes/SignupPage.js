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
    Login,
    AccountCircle
} from '@mui/icons-material';

import style from '../styles/Registration.module.css';
import Alert from '../components/Alert';

import {Link, useHistory} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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


export default function SignupPage(props) {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPAsswordvisible, setIsPasswordVisible] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const snackbarMessage = useRef("");

    const signup = ()=>{
        if(!email || !password || !confirmPassword){
            snackbarMessage.current = "email or password is empty";
            setShowSnackbar(true);
            return;
        }
        if(password !== confirmPassword){
            snackbarMessage.current = "password & confirm password does not match";
            setShowSnackbar(true);
            return;
        }
        createUserWithEmailAndPassword(getAuth(), email ,password)
        .then((userCredentials)=>{
            history.push("/");
        })
        .catch((error)=>{
            setShowSnackbar(true);
            console.log(error);
            return;
        });
    }

    return (
    
        <Box className={style.box}>
            <Typography variant="h4">Signup</Typography>
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
                id="outlined-adornment-password"
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

            <FormControl className={style.formControl}>
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                <OutlinedTextInput 
                id="outlined-adornment-confirm-password"
                value={confirmPassword}
                type={"password"}
                onChange={(event)=>{ setConfirmPassword(event.target.value)} }
                startAdornment={
                    <InputAdornment position='start'>
                        <Lock />
                    </InputAdornment>
                }
                label='Confirm Password'
                required
                ></OutlinedTextInput>
            </FormControl>

            <Box className={style.loginButton}>
                <LoginButton fullWidth variant="contained" startIcon={<AccountCircle />} 
                onClick={signup}>signup</LoginButton>
            </Box>
            <Box className={style.signupButton}>
                <Typography variant="subtitle1">
                    Already have an account?
                    <span className={style.spacing}></span>
                    <Link to="/login">Login</Link>
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