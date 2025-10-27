import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PreviousPageButton from './../components/PreviousPageButton.jsx';
import GameCard from '../components/GameCard.jsx';

export default function RulesPage() 
{
    return (
        <Container fixed>
            <Link to="/">Volver a la pagina principal</Link>

            <PreviousPageButton text="Regresar" showIcon />

            <PreviousPageButton text="Finalizar" />

            <Typography variant="h4" component="h1">Rules</Typography>

            <Typography>Enim deserunt eiusmod mollit et. Nostrud commodo labore non in nisi. Elit nisi pariatur cillum culpa do exercitation laboris id incididunt anim. Eiusmod occaecat minim ipsum sint consectetur do cillum elit do. Cupidatat ut Lorem ipsum eiusmod id nisi dolore enim cillum occaecat. Eiusmod elit deserunt cupidatat proident ut quis.Enim deserunt eiusmod mollit et. Nostrud commodo labore non in nisi. Elit nisi pariatur cillum culpa do exercitation laboris id incididunt anim. Eiusmod occaecat minim ipsum sint consectetur do cillum elit do. Cupidatat ut Lorem ipsum eiusmod id nisi dolore enim cillum occaecat. Eiusmod elit deserunt cupidatat proident ut quis.</Typography>

            <Divider component="div" orientation="vertical" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <GameCard />
                <GameCard />
                <GameCard />
            </Divider>
        </Container>
    )
}
