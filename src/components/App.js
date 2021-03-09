import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = useState(false);
    
    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }

    return (
        <div className="page">

            <Header/>
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
            <Footer/>

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="avatar-link-input" type="url" className="popup__form-item" name="link" required placeholder="Ссылка на фото"/>
                <span id="avatar-link-input-error" className="popup__form-item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="name-input" type="text" className="popup__form-item popup__form-item_value_name" name="name" minLength={2} maxLength={40} required placeholder="Имя"/>
                <span id="name-input-error" className="popup__form-item-error"></span>
                <input id="description-input" type="text" className="popup__form-item popup__form-item_value_description" name="description"  minLength={2} maxLength={200} required placeholder="О себе"/>
                <span id="description-input-error" className="popup__form-item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="cards" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="place-name-input" type="text" className="popup__form-item popup__form-item_value_place-name" name="title" minLength={2} maxLength={30} required placeholder="Название"/>
                <span id="place-name-input-error" className="popup__form-item-error"></span>
                <input id="link-input" type="url" className="popup__form-item popup__form-item_value_link" name="link" required placeholder="Ссылка на картинку"/>
                <span id="link-input-error" className="popup__form-item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="confirm" title="Вы уверены?"/>

            <ImagePopup/>

        </div>
    );
}

export default App;
