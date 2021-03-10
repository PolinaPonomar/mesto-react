import {useState,useEffect} from 'react';
import {api} from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userAvatar,setUserAvatar] = useState('#');
    const [userName,setUserName] = useState('');
    const [userDescription,setUserDescription] = useState('');
    const [cards,setCards] = useState([]);

    // Эффект, вызываемый (всего 1 раз) при монтировании компонента
    useEffect( () => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([dataUserInfo, dataCards]) => {
                // Добавление информации о пользователе с сервера на страницу:
                setUserAvatar(dataUserInfo.avatar);
                setUserName(dataUserInfo.name);
                setUserDescription(dataUserInfo.about);
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
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
                    <div className="profile__avatar-change"></div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" aria-label="edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
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
