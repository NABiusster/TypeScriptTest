import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../../interfaces";
import {Checkbox, FormControlLabel} from "@mui/material";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <FormControlLabel id={id.toString()} control={<Checkbox/>} label={name} />
    );
};

export {Genre};