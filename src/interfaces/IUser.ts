export interface IUser {
    avatar: {
        gravatar: {
            hash: string
        },
        tmdb: {
            avatar_pat: string
        }
    },
    "id": number,
    "iso_639_1": string
    "iso_3166_1": string,
    "name": string,
    "include_adult": boolean,
    "username": string
}