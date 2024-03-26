import {Checkbox, FormControlLabel} from "@mui/material";
import {FC, PropsWithChildren, SyntheticEvent} from "react";
import {IGenre} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {queryParamsActions} from "../../../store";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {with_genres} = useAppSelector(state => state.queryParams)
    const dispatch = useAppDispatch();
    const {id, name} = genre
    const handleCheckbox = (event: SyntheticEvent<Element, Event>, checked: boolean) => {
        if (checked) {
            dispatch(queryParamsActions.setGenre((event.target as HTMLInputElement).id))
        } else {
            dispatch(queryParamsActions.delGenre((event.target as HTMLInputElement).id))
        }
    };

    return (
        <FormControlLabel
            control={
                <Checkbox id={id.toString()}
                          onChange={handleCheckbox}
                          checked={with_genres && id===+with_genres.find((value)=>+value===id)}
                />}
            label={name}
        />
    );
};

export {Genre};