import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateAvatar({
          avatar: inputRef.current.value,
        });
    } 

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onSubmit={handleSubmit} onClose={props.onClose}>
                    <input id="avatar-link-input" ref={inputRef} type="url" className="popup__form-item" name="link" required placeholder="Ссылка на фото"/>
                    <span id="avatar-link-input-error" className="popup__form-item-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
