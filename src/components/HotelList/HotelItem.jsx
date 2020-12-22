import s from './HotelItem.module.css'

const HotelItem = (props) => {

    const src = 'data:image/png;base64,' + props.image;

    return(
        <div className={s.root}>
            <div className={s.image}>
                <img className={s.imageSrc} src={src}></img>
            </div>
            <div className={s.info}>
                <div className={s.heading}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.city}>{props.city.name}</div>
                </div>
                <div className={s.ratingBlock}>
                    <div className={s.ratingItem}>{props.rating}</div>
                </div>
                <div className={s.description}>{props.description}</div>
                <div className={s.moreBlock}>
                    <a className={s.moreButton}>Подробнее</a>
                </div>
            </div>
        </div>
    )
}

export default HotelItem;