import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Alert, Card, CardContent, Collapse} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import api from "../../../Services/api";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {login} from "../../../Slices/userSlice";

export function Login(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [errors, setErrors] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Card style={{marginTop: '1rem'}}>
            <CardContent>
                <Box
                    sx={{
                        marginTop: 8,
                        marginBottom: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Collapse in={errors}>
                        <Alert severity="error" hidden={errors}>Credentials incorrect!</Alert>
                    </Collapse>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            error={errors}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            error={errors}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item >
                                <Link to={'/register'} variant="body2">Register</Link>
                            </Grid>
                            <Grid item>
                                <Link to={'/'} variant="body2">Back</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
