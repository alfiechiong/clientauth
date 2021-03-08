import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {login as genToken} from '../Auth'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const isLoggedIn = async (username:string, password:string)=>await genToken(username, password) 

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="alfiechiong.info">
        Login System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const SignIn = () => {
  const classes = useStyles();
  const history = useHistory()

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPassworError] = useState<string>('')
  const [Clicked, setClicked] = useState<boolean>(false)

  const login = async (username:string,password:string)=>{
      if(validate()){
        await  isLoggedIn(username,password)
        history.push("/landing")
      }
  }

  const validateEmail = ()=>{
      let isValid = true
    const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(!validEmail.test(email)){
        setEmailError("Insert Valid Email")
        isValid =false
    }else{
      setEmailError("")
      isValid =true
    }

    return isValid
  }

  const validatePassword = ()=>{
    let isValid = true
    if(password.length < 5 && password !== null){
        setPassworError("Insert Valid password atleast 5 character")
        isValid =false
      }else{
        setPassworError("")
        isValid =true
      }
      return isValid
  }

  const validate = ()=>{
      let isValidEmail = validateEmail()
      let isValidPassword = validatePassword()
      return (isValidEmail && isValidPassword )
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setClicked(true)
    login(email,password)
}

    const watchPassword = (e:any)=>{
        setPassword(e.target.value)
        if(Clicked){
            validatePassword()
        }
    }

    const watchEmail = (e:any) =>{
        setEmail(e.target.value)
        if(Clicked){
            validateEmail()
        }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailError !== ''}
            value={email}
            onInput={ (e)=>watchEmail(e)}
            helperText={emailError !== '' && emailError}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={passwordError !== ''}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onInput={(e)=>watchPassword(e)}
            helperText={passwordError !== '' && passwordError}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn
