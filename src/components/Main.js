import React from 'react';
import {useState,useEffect} from 'react';
import {api} from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
    // подписка на контекст информации о юзере
    const currentUser = React.useContext(CurrentUserContext);

    const [cards,setCards] = useState([]);

    // Эффект, вызываемый (всего 1 раз) при монтировании компонента
    useEffect( () => {
        api.getInitialCards()
            .then((dataCards) => {
                // Добавление существующих на сервере карточек на страницу:
                setCards(dataCards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [] )

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
                    <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
                    <div className="profile__avatar-change"></div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" aria-label="edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button type="button" aria-label="add" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="cards">
                {
                    cards.map(item => ( // jsx оборачиваем в скобки, чтобы избежать проблем с автоматической вставкой точек с запятой
                        <Card card={item} key={item._id} onCardClick={props.onCardClick}/> //Обязательно передается key, т.к. каждая карточка - элемент списка карточек
                    )
                    )
                }
            </section>

        </main>
    );
}

export default Main;
