import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";
import {ICompany} from "./ICompany";
import {ICountry} from "./ICountry";
import {ILanguage} from "./ILanguage";

export interface IMovieDetails extends IMovie{
    belongs_to_collection: string,
    budget: number,
    genres: IGenre[],
    homepage: string,
    imdb_id: string,
    "production_companies": ICompany[],
    "production_countries": ICountry[],
    revenue: number,
    runtime: number,
    "spoken_languages": ILanguage[],
    status: string,
    tagline: string,
}