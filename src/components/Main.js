import React from 'react';
import { useState,useEffect } from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
    // подписка на контекст информации о юзере
    const currentUser = React.useContext(CurrentUserContext);
    const [cards,setCards] = useState([]);

    function handleCardLike (card) {
        // Проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(liker => liker._id === currentUser._id);
        if (!isLiked) {
            api.putLike(card._id)
                .then((newCard) => { // получили данные лайкнутой карточки (лайк уже проставлен)
                    // в cards записываем новый массив, который получен так:
                    // в текущем массиве перебираем карточки и когда id одной из карточек совпадает с id нашей карточки,
                    // менем ее на новую (с лайком)
                    setCards((state) => state.map((item) => item._id === card._id ? newCard : item)); // state - это текущий стейт (т.е необновленный cards)
                })
                .catch((err) => {
                    console.log(err);
                })

        } else {
            api.deleteLike(card._id)
                .then((newCard) => { //аналогично
                    setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    function handleCardDelete (card) {
        // Определяем, являемся ли мы владельцем карточки
        const isOwn = card.owner._id === currentUser._id;
        if (isOwn) {
            api.deleteCard(card._id)
                .then((answer) => {
                    setCards((state) => state.filter((item) => item._id !== card._id));
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

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
                        <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/> //Обязательно передается key, т.к. каждая карточка - элемент списка карточек
                    )
                    )
                }
            </section>

        </main>
    );
}

export default Main;
