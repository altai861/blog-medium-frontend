import yoloImage from "../../assets/yolo.png"
import Menu from "./Menu";
import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import UserImage from "../HelperComponents/UserImage";
import { pink } from "@mui/material/colors";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import windowsImage from '../../assets/windoes-icon.png'
import MenuForPhone from "./MenuForPhone";
import { Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
//My temporary image
import altai from "../../assets/altai.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { auth } = useAuth();
    const navigate = useNavigate();

    const [isSearchOn, setIsSearchOn] = useState(false);
    const [isMenuForPhoneOn, setIsMenuForPhoneOn] = useState(false);
    const isDesktopScreen = useMediaQuery("(min-width: 1050px)");

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="yolo-image">
                    <img src={yoloImage} width="110" onClick={() => navigate("/")}/>
                </div>
                { isDesktopScreen ? (
                    <div className="other-part">
                    { isSearchOn ? (
                        <>
                            <div>
                                <input type="text" placeholder="Хайх үгээ бичнэ үү..."/>
                            </div>
                            <IconButton onClick={() => setIsSearchOn(!isSearchOn)}>
                                <Search />
                            </IconButton>
                            <UserImage />
                        </>
                    ) : (
                        <>
                            <Menu />
                            <IconButton onClick={() => setIsSearchOn(!isSearchOn)}>
                                <Search />
                            </IconButton>
                            <UserImage />
                        </>
                    ) }
                </div>
                ) : (
                    <div className="phone-nav-other-part">
                        <IconButton>
                            <Search sx={{ color: "pink" }}/>
                        </IconButton>
                        <button onClick={() => setIsMenuForPhoneOn(!isMenuForPhoneOn)}>
                            <img src={windowsImage}/>
                        </button>
                        
                        
                    </div>
                ) }
                
            </div>
            { isMenuForPhoneOn && !isDesktopScreen && (
                <MenuForPhone />
            ) }


            <Outlet />
        </div>
    )
}

export default Navbar;