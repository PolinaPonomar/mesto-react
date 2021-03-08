function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container">
                <button type="button" aria-label="close" className="popup__close-button"></button>
                <img className='popup__photo' src="#" alt="описание фотографии"/>
                <p className="popup__photo-name">подпись к фото</p>
            </div>
        </div>
    );
}

export default ImagePopup;

