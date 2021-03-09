function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }  

    return (
        <article className="card">
            <div className="card__photo" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}/>
            <div className="card__photo-info">
                <h2 className="card__text">{props.card.name}</h2>
                <div className="card__like-container">
                    <button type="button" aria-label="like" className="card__like-button"></button>
                    <p className="card__likes-number">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" aria-label="delete" className="card__delete-button"></button>
        </article>
    );
}

export default Card;
