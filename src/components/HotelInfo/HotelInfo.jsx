import s from './HotelInfo.module.css'

const HotelInfo = (props) => {

    console.log(props.location);
    return (
        <div>
            {props.location.name}
        </div>
    )
}

export default HotelInfo;