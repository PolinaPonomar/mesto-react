import avatar from '../images/avatar.png';

function Main() {
    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img className="profile__avatar" src={avatar} alt="Фото профиля"/>
                    <div className="profile__avatar-change"></div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">Юнона Сонная</h1>
                        <button type="button" aria-label="edit" className="profile__edit-button"></button>
                    </div>
                    <p className="profile__description">где я бывала во снах</p>
                </div>
                <button type="button" aria-label="add" className="profile__add-button"></button>
            </section>

            <section className="cards">
                
            </section>

        </main>
    );
}

export default Main;
