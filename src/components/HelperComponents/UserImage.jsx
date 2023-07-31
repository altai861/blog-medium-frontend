import { Box } from "@mui/material";

//my temporary image
import altai from '../../assets/altai.jpeg';

const UserImage = ({ image, size = "50px" }) => {
    return (
        <Box width={size} height={size} marginLeft="1rem">
            <img 
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                alt="user"
                src={altai}
            />
        </Box>
    )
}

export default UserImage