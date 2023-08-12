import { Box } from "@mui/material";
import useAuth from "../../hooks/useAuth";
//my temporary image
import altai from '../../assets/altai.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import { Navigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const UserImage = ({ image, size = "50px" }) => {

    const { auth } = useAuth();

    return (
         auth?.accessToken 
            ? (
                <Box width={size} height={size} marginLeft="1rem">
                    <img 
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        width={size}
                        height={size}
                        alt="user"
                        src={altai}
                    />
                </Box>
            ) : (
                <IconButton onClick={() => Navigate("/login")}>
                    <LoginIcon />
                </IconButton>
            )
    
        
    )
}

export default UserImage