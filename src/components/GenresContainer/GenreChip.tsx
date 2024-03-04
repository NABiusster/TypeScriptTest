import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";
import {Chip} from "@mui/material";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreChip: FC<IProps> = ({genre}) => {
    const {name,id}=genre
    return (
        <Chip label={name}
              color="info"
              component="a"
              href="/genres"
              variant="outlined"
              clickable
        />
    );
};

export {GenreChip};