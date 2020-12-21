import { useSelector } from 'react-redux'
import HotelItem from './HotelItem'
import s from './HotelList.module.css'
const HotelList = (props) => {

    const hotelList = useSelector(state => state.hotels.hotelList)
    const hotelMap = hotelList.map(hotelItem => <HotelItem name={hotelItem.name}
                                                           adress={hotelItem.adress}
                                                           description={hotelItem.description}
                                                           rating={hotelItem.rating}
                                                           city={hotelItem.city}
                                                           facilities={hotelItem.facilities}/>)

    return (
        <div className={s.root}>
            { hotelMap }
        </div>
    )
}

export default (HotelList);
