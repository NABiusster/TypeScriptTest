import {FC, PropsWithChildren} from "react";
import {Navigate, useLocation} from "react-router-dom";

import {authService} from "../services";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../store";

interface IProps extends PropsWithChildren {

}

const AuthRequired: FC<IProps> = ({children}) => {
    let access = authService.getToken();
    const {currentUser} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    console.log(access);
    console.log(currentUser);
    if ((access) && (!currentUser)) {
    //     if (access) {
    //         dispatch(authActions.currentUser)
    //     } else {
            authService.deleteToken()
            dispatch(authActions.logout)
        // }
    }
    const {pathname} = useLocation();

    if (!access) {
        return <Navigate to={'/login'} state={{pathname}}/>
    }
    return (
        <>
            {children}
        </>
    );
};

export {AuthRequired};