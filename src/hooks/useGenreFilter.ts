import {useSearchParams} from "react-router-dom";

const useGenreFilter = () => {

    const [query, setQuery] = useSearchParams(null)
    const handleGenresFilter = () => {
    }
    return{
setQuery, handleGenresFilter
    }

}

export {useGenreFilter};