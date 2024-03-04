import {
    AppBar, Badge, Box, Button, IconButton, Toolbar, Typography,
} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import {useColorScheme} from "@mui/material/styles";
import { useNavigate} from "react-router-dom";

import {Search, SearchIconWrapper, StyledInputBase} from "./styles";

const Header = () => {
    const {mode, setMode} = useColorScheme();
    const navigate= useNavigate()
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >CATALOG
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={()=>{navigate("movies")}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Movies
                        </Button>
                        <Button
                            onClick={()=>{navigate("genres")}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >Genres
                        </Button>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton size="large" color="inherit" onClick={() => {
                            if (mode === 'light') {
                                setMode('dark');
                            } else {
                                setMode('light');
                            }
                        }}>
                            {mode === "light" ? <DarkModeIcon/> : <LightModeTwoToneIcon/>}
                        </IconButton>
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
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                        >
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};