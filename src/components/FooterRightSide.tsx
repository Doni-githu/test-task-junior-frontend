import viber from "../assets/img/viber.svg"
import whatsApp from "../assets/img/whatsapp.svg"
import telegram from "../assets/img/telegram.svg"
const FooterRightSide = () => {
    return (
        <div className="footer-right">
            <div className="footer-right-col">
                <div className="col-header">
                    <p>Контакты</p>
                </div>
                <div className="col-body">
                    <div className="col-body-text">+7 555 555-55-55</div>
                    <div className="col-body-icons">
                        <div className="col-body-icon">
                            <img src={telegram} alt="" />
                        </div>
                        <div className="col-body-icon">
                            <img src={viber} alt="" />
                        </div>
                        <div className="col-body-icon">
                            <img src={whatsApp} alt="" />
                        </div>
                    </div>
                    <div className="col-body-text">Москва, Путевой проезд 3с1, к 902</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©WELBEX 2022. Все права защищены.</p>
                <a href="#">Политика конфиденциальности</a>
            </div>
        </div>
    )
}

export default FooterRightSide
