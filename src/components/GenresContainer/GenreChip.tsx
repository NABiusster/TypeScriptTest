import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";
import {Chip} from "@mui/material";
import {useAppDispatch} from "../../hooks";
import {queryParamsActions} from "../../store";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreChip: FC<IProps> = ({genre}) => {
    const {name, id} = genre
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(queryParamsActions.setGenre(id))
        navigate('/genres')
    };
    return (
        <Chip label={name}
              color="info"
              component="a"
              variant="outlined"
            clickable
              onClick={handleClick}
        />
    );
};

export {GenreChip};