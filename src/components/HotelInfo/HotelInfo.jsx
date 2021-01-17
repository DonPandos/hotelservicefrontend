import s from './HotelInfo.module.css'
import {NavLink} from "react-router-dom";
import HotelItem from "../HotelList/HotelItem";

const HotelInfo = (props) => {

    const src = 'data:image/png;base64,' + props.location.image;

    const facilitiesMap = props.location.facilities.map(facility => <p>{facility.name}</p>)
    return (
        <div className={s.root}>
            <div className={s.image}>
                <img className={s.imageSrc} src={src}></img>
            </div>
            <div className={s.info}>
                <div className={s.heading}>
                    <div className={s.name}>{props.location.name}</div>
                    <div className={s.city}>{props.location.city.name}</div>
                </div>
                <div className={s.ratingBlock}>
                    <div className={s.ratingItem}>{props.location.rating}</div>
                </div>
                <div className={s.description}>{props.location.description}</div>
                <div className={s.moreBlock}>

                </div>
                {facilitiesMap}
            </div>
        </div>
    )
}

export default HotelInfo;