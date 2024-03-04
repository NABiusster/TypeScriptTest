import React from "react";
import {useSearchParams} from "react-router-dom";

const usePagination = () => {
    const [query, setQuery] = useSearchParams({page: "1"})
    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery({page: value.toString()})
    };
    const page = +query.get("page");
    return {
        page,
        handlePagination
    }

}
export {usePagination}
