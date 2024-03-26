import {IAuth, IUser} from "../interfaces";

const username = 'guest'
const password = username
const fakeAuth: IAuth = {
    username,
    password
}
const fakeUser: IUser = {
    avatar: {
        gravatar: {
            hash: null
        },
        tmdb: {
            avatar_pat: null
        }
    },
    id: 1,
    iso_639_1: "uk",
    iso_3166_1: "UA",
    name: "",
    include_adult: false,
    username: "Guest"
}


export {fakeAuth, fakeUser}