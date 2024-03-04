import {FC, PropsWithChildren,} from "react";
import {Card, FormGroup} from "@mui/material";
import {IGenre} from "../../../interfaces";
import {Genre} from "../Genre";

interface IProps extends PropsWithChildren {
    genres: IGenre[]
}

const Genres: FC<IProps> = ({genres}) => {
    genres.unshift({id:0, name: 'All'})
    return (
        <Card>
            <FormGroup >
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </FormGroup>
        </Card>
    );
};

export {Genres};