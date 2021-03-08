import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">

        <Header/>
        <Main/>
        <Footer/>

        <div className="popup popup_profile">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <form className="popup__form" name="personal-info-form" novalidate>
                    <h2 className="popup__header">Редактировать профиль</h2>
                    <input id="name-input" type="text" className="popup__form-item popup__form-item_value_name" name="name" minlength={2} maxlength={40} required placeholder="Имя"/>
                    <span id="name-input-error" className="popup__form-item-error"></span>
                    <input id="description-input" type="text" className="popup__form-item popup__form-item_value_description" name="description"  minlength={2} maxlength={200} required placeholder="О себе"/>
                    <span id="description-input-error" className="popup__form-item-error"></span>
                    <button type="submit" className="popup__save-button">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_avatar">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <form className="popup__form" name="avatar-form" novalidate>
                    <h2 className="popup__header">Обновить аватар</h2>
                    <input id="avatar-link-input" type="url" className="popup__form-item" name="link" required placeholder="Ссылка на фото"/>
                    <span id="avatar-link-input-error" className="popup__form-item-error"></span>
                    <button type="submit" className="popup__save-button">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_cards">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <form className="popup__form" name="photo-info-form" novalidate>
                    <h2 className="popup__header">Новое место</h2>
                    <input id="place-name-input" type="text" className="popup__form-item popup__form-item_value_place-name" name="title" minlength={2} maxlength={30} required placeholder="Название"/>
                    <span id="place-name-input-error" className="popup__form-item-error"></span>
                    <input id="link-input" type="url" className="popup__form-item popup__form-item_value_link" name="link" required placeholder="Ссылка на картинку"/>
                    <span id="link-input-error" className="popup__form-item-error"></span>
                    <button type="submit" className="popup__save-button">Создать</button>
                </form>
            </div>
        </div>

        <div className="popup popup_image">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <img className='popup__photo' src="#" alt="описание фотографии"/>
                <p className="popup__photo-name">подпись к фото</p>
            </div>
        </div>

        <div className="popup popup_confirm">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <form className="popup__form" name="confirm-form" novalidate>
                    <h2 className="popup__header">Вы уверены?</h2>
                    <button type="submit" className="popup__save-button">Да</button>
                </form>
            </div>
        </div>

        <template id="card-template">
            <article className="card">
                <img className="card__photo" src="#" alt="описание фотографии"/>
                <div className="card__photo-info">
                    <h2 className="card__text">подпись к фото</h2>
                    <div className="card__like-container">
                        <button type="button" aria-label="like" className="card__like-button"></button>
                        <p className="card__likes-number">0</p>
                    </div>
                </div>
                <button type="button" aria-label="delete" className="card__delete-button"></button>
            </article>
        </template>

    </div>
  );
}

export default App;