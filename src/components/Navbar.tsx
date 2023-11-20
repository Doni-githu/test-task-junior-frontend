import logoWelbex from "../assets/img/logo_welbex.svg"
import viber from "../assets/img/viber.svg"
import whatsApp from "../assets/img/whatsapp.svg"
import telegram from "../assets/img/telegram.svg"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <div className="brand">
                    <img src={logoWelbex} alt="" />
                    <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                </div>
                <ul>
                    <li>
                        <a href="#">Услуги</a>
                    </li>
                    <li>
                        <a href="#">Виджеты</a>
                    </li>
                    <li>
                        <a href="#">Интеграции</a>
                    </li>
                    <li>
                        <a href="#">Кейсы</a>
                    </li>
                    <li id="none">
                        <a href="#">Сертификаты</a>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="phone">
                    <p>+7 555 555-55-55</p>
                </div>
                <div className="icons">
                    <div className="icon">
                        <img src={telegram} />
                    </div>
                    <div className="icon">
                        <img src={viber} />
                    </div>
                    <div className="icon">
                        <img src={whatsApp} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
