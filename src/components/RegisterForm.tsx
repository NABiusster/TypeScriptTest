import LoginIcon from "@mui/icons-material/Login";
import {Button, CircularProgress, TextField } from "@mui/material";
import {useAppSelector} from "../hooks";

const RegisterForm = () => {
    const {isLoading} = useAppSelector(state => state.loadingReducer)
    return (
        <form>
            <TextField
                color="primary"
                autoFocus
                name="nickname"
                label="Name"
                margin="normal"
                variant="outlined"
                fullWidth
                size={"small"}
            />
            <TextField size={"small"} color="primary" name="nickname" label="Last Name" margin="normal" variant="outlined" fullWidth/>
            <TextField size={"small"} color="primary" name="Email" label="Email" margin="normal" variant="outlined" fullWidth/>
            <TextField
                color="primary"
                name="password"
                type="password"
                margin="normal"
                label="Password"
                variant="outlined"
                fullWidth
                size={"small"}
            />

            <Button
                sx={{
                    mt: 2,
                    textTransform: 'uppercase',
                    color: 'primary.contrastText',
                    ' &:not(:disabled)': {
                        background: (theme) =>
                            `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    },
                    '&:hover': {
                        background: (theme) =>
                            `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
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
                Sign Up
            </Button>
        </form>
    );
};

export {RegisterForm}