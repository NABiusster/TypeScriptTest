import {useMemo} from "react";
import {useAppSelector} from "./useRedux";

const useQueryParams = (pathname: string): URLSearchParams => {

    const {page, with_genres, query} = useAppSelector(state => state.queryParams)
    // const setSearchParams = (key: string) => {
    //     const param = searchParams.get(key)
    //     if (param.length === 0) {
    //         searchParams.delete(key)
    //     } else {
    //         searchParams.set('query', query)
    //     }
    //
    // }

    return useMemo(
        () => {
            const searchParams = new URLSearchParams()
            searchParams.set('page', page.toString())
            if (pathname === '/search') {
                searchParams.set('query', query)
            } else {
                searchParams.set('with_genres', with_genres.join())
            }
            for (const [key, value] of Array.from(searchParams)) {
                if (value.length === 0) {
                    searchParams.delete(key)
                }
            }
            return searchParams
        },
        [pathname, page, with_genres, query]
    )
}
export {useQueryParams}