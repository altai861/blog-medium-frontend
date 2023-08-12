import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Menu = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navbarTexts = ['ЭНТЕРТАЙНМЕНТ', 'БОЛОВСРОЛ', 'ХУВЬ ХҮНИЙ ХӨГЖИЛ', 'ЯРИЛЦЛАГА', 'СОНИН ХАЧИН', 'ЗӨВЛӨГӨӨ', 'КОМИК']
    const navigate = useNavigate();
  return (
    <div className="menu">
        <div className="menu-item">
            <div className="menu-item-link">
              <a className="link" onClick={() => navigate("/entertainment")}>ЭНТЕРТАЙНМЕНТ</a>
            </div>
            
            <div className="item-submenu">
              
                <div className="menu-item-link">
                    <a>ОДДЫН ТУХАЙ</a>
                </div>
                <div className="menu-item-link">
                    <a>ДУУ ХӨГЖИМ</a>
                </div>
                <div className="menu-item-link">
                    <a>КИНО УРЛАГ</a>
                </div>
              
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
                <a className="link" onClick={() => navigate('education')}>БОЛОВСРОЛ</a>
            </div>
            
            <div className="item-submenu">
                  <div className="menu-item-link">
                      <a>ГАДААД ХЭЛ</a>
                  </div>
                  <div className="menu-item-link">
                        <a>ТЭТГЭЛЭГ</a>
                  </div>
                  <div className="menu-item-link">
                      <a>МЭРГЭЖИЛ СОНГОЛТ</a>
                  </div>
                  <div className="menu-item-link">
                      <a>ЭЕШ</a>
                  </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
              <a className="link">ХУВЬ ХҮНИЙ ХӨГЖИЛ</a>
            </div>
           
            <div className="item-submenu">
                    <div className="menu-item-link">
                        <a>ЗӨВ ДАДАЛ</a>
                    </div>
                    <div className="menu-item-link">
                        <a>НОМТОЙ НӨХӨРЛӨЕ</a>
                    </div>
                    <div className="menu-item-link">
                        <a>МЭДЭХЭД ИЛҮҮДЭХГҮЙ</a>
                    </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
              <a className="link">ЯРИЛЦЛАГА</a>
            </div>
            <div className="item-submenu">
                    <div className="menu-item-link">
                        <a>АМЖИЛТ & КАРЬЕР</a>
                    </div>
                    <div className="menu-item-link">
                        <a>ЭНТЕРТАЙНМЕНТ</a>
                    </div>
                    <div className="menu-item-link">
                        <a>START-UP</a>
                    </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
            <a className="link">СОНИН ХАЧИН</a>
            </div>
            <div className="item-submenu">
                    <div className="menu-item-link">
                        <a>ХААНА, ЮУ БОЛОХ ВЭ?</a>
                    </div>
                    <div className="menu-item-link">
                        <a>АМЬТДЫН ТУХАЙ</a>
                    </div>
                    <div className="menu-item-link">
                        <a>ҮҮНИЙГ МЭДЭХ ҮҮ?</a>
                    </div>
                    <div className="menu-item-link">
                        <a>СОНИРХОЛТОЙ ЗУРГУУД</a>
                    </div>
                    <div className="menu-item-link">
                        <a>МЭДЭЭ</a>
                    </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
              <a className="link">ЗӨВЛӨГӨӨ</a>
            </div>
            
            <div className="item-submenu">
                    <div className="menu-item-link">
                        <a>ГОО САЙХАН & ЗАГВАР</a>
                    </div>
                    <div className="menu-item-link">
                        <a>ЭРҮҮЛ МЭНД</a>
                    </div>
                    <div className="menu-item-link">
                        <a>СЭТГЭЛЗҮЙ</a>
                    </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-link">
              <a className="link">КОМИК</a>
            </div>
        </div>
    </div>
  )
}

export default Menu