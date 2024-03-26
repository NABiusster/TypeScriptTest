import {Genres, Movies} from "../components";
import {Box, Container} from "@mui/material";


const GenresPage = () => {

    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: "1vh 1vw"
        }}>
            <Genres/>
            <Box sx={{
                width: "73vw"
            }}>
                <Movies/>
            </Box>
        </Container>
    );
};

export {GenresPage};