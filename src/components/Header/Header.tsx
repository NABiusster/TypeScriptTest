import {AppBar, Box, Button, debounce, Toolbar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useColorScheme} from "@mui/material/styles";
import {useLocation, useNavigate} from "react-router-dom";

import {FlexBox, MaterialUISwitch, Search, SearchIconWrapper, StyledInputBase, TypographyAH5} from "./styles";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {queryParamsActions} from "../../store";
import {AuthUser} from "./AuthUser";
import {UnAuthUser} from "./UnAuthUser";

const Header = () => {
    const {mode, setMode} = useColorScheme();
    const {currentUser} = useAppSelector(state => state.authReducer);
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <TypographyAH5 to={"/"}>CATALOG
                    </TypographyAH5>
                    <FlexBox>
                        <Button
                            onClick={() => {
                                navigate("/movies")
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >Movies
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("/genres")
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >Genres
                        </Button>
                    </FlexBox>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            onChange={debounce((event) => {
                                if (event.target.value === "") {
                                    navigate('/movies')
                                } else {
                                    dispatch(queryParamsActions.setSearchQuery(event.target.value))
                                    if (!(pathname === '/search')) {
                                        navigate('/search')
                                    }
                                }
                            }, 1000)
                            }
                        />
                    </Search>
                    <Box sx={{display: {xs: 'flex'}}}>
                        <MaterialUISwitch sx={{m: 1}}
                                          defaultChecked
                                          onClick={() => {
                                              if (mode === 'light') {
                                                  setMode('dark');
                                              } else {
                                                  setMode('light');
                                              }
                                          }}/>
                    </Box>

                    {currentUser ? <AuthUser/> : <UnAuthUser/>}
                </Toolbar>
            </AppBar>
        </Box>
    )
        ;
};

export {Header};