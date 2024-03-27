import {Button, CircularProgress, TextField} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';
import LoginIcon from "@mui/icons-material/Login";
import {SubmitHandler, useForm} from "react-hook-form";


import {IAuth} from "../interfaces";
import {useAppDispatch, useAppLocation, useAppSelector} from "../hooks";
import {authActions} from "../store";

const LoginForm = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {state} = useAppLocation<{ pathname: string }>();
    const {loginError} = useAppSelector(state => state.authReducer);
    const {isLoading} = useAppSelector(state => state.loadingReducer)
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === 'fulfilled') {
            navigate(state?.pathname || '/movies')
        }
    };
    return (
        <div>  {loginError && <h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)}>
                <TextField
                    autoFocus
                    color="primary"
                    name="login"
                    label="Login"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    size={"small"}
                    {...register('username')}
                />
                <TextField
                    color="primary"
                    name="password"
                    type="password"
                    margin="dense"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size={"small"}
                    {...register('password')}
                />
                <Link to="/#" color="tertiary.main">
                    Forgot password?
                </Link>
                <Button
                    sx={{
                        mt: 2,
                        textTransform: 'uppercase',
                        color: 'primary.contrastText',
                        ' &:not(:disabled)': {
                            background: (theme) =>
                                `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
                        },
                        '&:hover': {
                            background: (theme) =>
                                `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 100%)`,
                        },
                    }}
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    endIcon={
                        isLoading ? (
                            <CircularProgress
                                color="secondary"
                                size={25}
                                sx={{
                                    my: 'auto',
                                }}
                            />
                        ) : (
                            <LoginIcon/>
                        )
                    }
                    fullWidth
                    color="primary"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export {LoginForm};