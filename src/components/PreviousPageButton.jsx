import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

// destructuring
export default function PreviousPageButton({showIcon, text} = props) 
{
    const navigate = useNavigate();

    return <Button variant="contained" color="primary" onClick={ () => navigate(-1) }>
        {showIcon && <ArrowBackIcon />}
        {text}
    </Button>
}
