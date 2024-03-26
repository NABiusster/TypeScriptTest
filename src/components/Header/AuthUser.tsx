import {Badge, IconButton, Toolbar} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {authActions} from "../../store";

const AuthUser = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Toolbar>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon/>
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            ><AccountCircle/>
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                aria-label="Exit"
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                    dispatch(authActions.logout())
                    navigate('/login')
                }}
            ><LogoutIcon/>
            </IconButton>
        </Toolbar>
    );
};

export {AuthUser};