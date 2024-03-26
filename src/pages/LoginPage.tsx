import {Avatar, Box, ButtonBase, Card, Link, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import {LoginForm} from "../components";

const LoginPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            height: '88vh'
        }}

        >
            <Card
                elevation={20}
                sx={{
                    width: '30vw',
                    padding: '1vh 1vw'
                }}
            >
                <Stack direction="column" spacing={1}>
                        <Typography variant="body2" color="textSecondary">
                            Sign in using your account credentials.
                            <b>Use guest:guest for login</b>
                        </Typography>

                    <LoginForm/>
                    <div>
                        <Typography color="textSecondary" gutterBottom>
                            OR SIGN IN WITH
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                '& button': {
                                    color: '#fff',
                                },
                            }}
                        >
                            <Avatar component={ButtonBase} sx={{bgcolor: '#4267B2'}} variant="rounded">
                                <FacebookIcon/>
                            </Avatar>
                            <Avatar component={ButtonBase} sx={{bgcolor: '#1DA1F2'}} variant="rounded">
                                <TwitterIcon/>
                            </Avatar>
                            <Avatar component={ButtonBase} sx={{bgcolor: '#DB4437'}} variant="rounded">
                                <GoogleIcon/>
                            </Avatar>
                        </Stack>
                    </div>
                    <Typography>
                        Not register?{' '}
                        <Link to="/register" variant="body2" component={RouterLink}>
                            Register
                        </Link>
                    </Typography>
                </Stack>
            </Card>
        </Box>
    );
};

export {LoginPage};