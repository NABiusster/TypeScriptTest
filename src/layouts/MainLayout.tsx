import {Outlet} from "react-router-dom";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';


import {Header} from "../components";
import {CssBaseline} from "@mui/material";

const theme = extendTheme();

const MainLayout = () => {
    return (
        <CssVarsProvider theme={theme} defaultMode="dark">
            <CssBaseline/>
            <Header/>
            <Outlet/>
        </CssVarsProvider>
    );
};

export {MainLayout};