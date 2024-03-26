import {Button, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";

const UnAuthUser = () => {
    const navigate = useNavigate();
    return (
        <Toolbar>
            <Toolbar>
                <Button
                    color={"inherit"}
                    onClick={()=>navigate('/login')}

                >
                    Login
                </Button>
                <Button
                    color={"inherit"}
                    onClick={()=>navigate('/register')}
                >
                    Register
                </Button>
            </Toolbar>
        </Toolbar>
    );
};

export {UnAuthUser};