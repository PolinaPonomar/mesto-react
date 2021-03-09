import {useState,useEffect} from 'react';
import {api} from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userAvatar,setUserAvatar] = useState('#');
    const [userName,setUserName] = useState('');
    const [userDescription,setUserDescription] = useState('');
    const [cards,setCards] = useState([]);

    useEffect( () => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([dataUserInfo, dataCards])=>{
                setUserAvatar(dataUserInfo.avatar);
                setUserName(dataUserInfo.name);
                setUserDescription(dataUserInfo.about);

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
                    cards.map(item =>
                        <Card card={item}/>
                    )
                }
            </section>

        </main>
    );
}

export default Main;
