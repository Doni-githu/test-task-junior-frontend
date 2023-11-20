const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase-left">
                <h2>Зарабатывайте больше <br /><span className="upper">c WELBEX</span></h2>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className="showcase-right">
                <div className="row">
                    <p className="text">Вместе с <span className="upper small">бесплатной <br /> консультацией</span> мы дарим:</p>
                </div>
                <div className="cols">
                    <div className="col">
                        <p className="title">Виджеты</p>
                        <p className="sub">30 готовых решений</p>
                    </div>
                    <div className="col">
                        <p className="title">Dashboard</p>
                        <p className="sub">с показателями вашего бизнеса</p>
                    </div>
                    <div className="col">
                        <p className="title">Skype Аудит</p>
                        <p className="sub">отдела продаж и CRM системы</p>
                    </div>
                    <div className="col">
                        <p className="title">35 дней</p>
                        <p className="sub">использования CRM</p>
                    </div>
                </div>
                <div className="button">
                    <button>Получить консультацию</button>
                </div>
            </div>
        </div>
    )
}

export default Showcase
