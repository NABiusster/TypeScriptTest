import {Card, Container, Link, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {RegisterForm} from "../components";

const RegisterPage = () => {
    return (
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '88vh'}}>
            <Card elevation={20} sx={{marginTop: '2vh', width: '40vw', padding: '2vh 2vw'}}>
                <Stack direction="column" spacing={1}>
                    <div>
                        <Typography variant="body1" color="textSecondary">
                            It&#39;s fake register form. Nothing to register
                        </Typography>
                    </div>
                    <RegisterForm/>
                    <Typography>
                        Already have an account?{' '}
                        <Link to="/login" component={RouterLink}>
                            Sign In
                        </Link>
                    </Typography>
                </Stack>
            </Card>
        </Container>
    );
};

export {RegisterPage};