export interface IMovQueryParams {
    // include_adult: boolean,
    // include_video: boolean,
    // language: string,
    page: number,
    // region: string,
    // sort_by: string,
    // with_cast:string,
    // with_companies:string,
    // with_crew:string,
    with_genres:string[],
    // with_keywords:string,
    // with_origin_country:string,
    // with_original_language:string,
    // with_people:string,
    // with_watch_providers:string,
    // without_companies:string,
    // without_genres:string,
    // without_keywords:string,
    // without_watch_providers:string,
    // year:number
    query:string
}