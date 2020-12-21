import s from './HotelItem.module.css'

const HotelItem = (props) => {

    return(
        <div className={s.root}>
            <div className={s.image}>
                <img className={s.imageSrc} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyex3VdNhG-4XT5_vYXAueE3_e33DoECmrA&usqp=CAU"></img>
            </div>
            <div className={s.info}>
                <div className={s.flexbox}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.city}>{props.city.name}</div>
                </div>
                <div className={s.flexbox}>
                    <div className={s.adress}>{props.adress}</div>
                    <div className={s.rating}>{props.rating}/5</div>
                    <div className={s.facilityList}>{props.facilities.map(facility => {
                        return <span className={s.facilityItem}>{facility.name}</span>
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default HotelItem;