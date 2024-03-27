import {apiService} from "./apiService";
import {Authorization, fakeAuth, urls} from "../constants";
import {IToken} from "../interfaces/Auth/IToken";
import {IAuth, IUser} from "../interfaces";
import {IRes} from "../types";

const requestTokenKey = 'request_token'
const authService = {
    async login(user: IAuth): Promise<IUser> {
        //Це заглушка перевірки логіна та пароля.
        const {username, password} = user
        if (username === fakeAuth.username && password === fakeAuth.password) {
             this.setToken({success:true, request_token:Authorization})
             const {data: currentUser} = await this.currentUser();
            return currentUser
        }
    },
    currentUser(): IRes<IUser> {
        return apiService.get(urls.auth.getUser)
    },

    register(user: IAuth): IRes<IUser> {
        return null
    },


    setToken({request_token}: IToken): void {
        localStorage.setItem(requestTokenKey, request_token)
    },
    getToken(): string {
        return localStorage.getItem(requestTokenKey)
    },
    deleteToken(): void {
        localStorage.removeItem(requestTokenKey)
    }
}

export {
    authService
}