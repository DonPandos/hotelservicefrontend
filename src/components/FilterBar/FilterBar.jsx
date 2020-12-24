import s from './FilterBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setHotels} from "../../reducers/hotel/actions";
import API from "../../utils/API";

const FilterBar = (props) => {
    const cities = useSelector(state => state.city.cities);
    console.log(cities)
    const citiesMap = cities.map(cityItem => <option value={cityItem.id}>{cityItem.name}</option>)
    const dispatch = useDispatch();

    const handleOnCityChanged = (event) => {
        if(event.target.value == 'all') {
            API.get('/hotels')
                .then((response) => {
                    dispatch(setHotels(response.data))
                });
            return;
        }
        API.get('/hotels/city/' + event.target.value)
            .then((response) => {
                dispatch(setHotels(response.data));
            })
    }
    return (
        <div className={s.root}>
            <div className={s.label}><p>Город</p></div>
            <select className={s.citySelect} onChange={handleOnCityChanged}>
                <option selected value={'all'}>Все</option>
                { citiesMap }
            </select>
            <div className={s.label}><p>Удобства</p></div>
            <div className={s.facilities}>
                <ul>
                    <li><input type="checkbox" name={'wifi'}/><label for={'wifi'}>Wi-Fi</label></li>
                    <li><input type="checkbox" name={'wifi'}/><label for={'wifi'}>Парковка</label></li>
                    <li><input type="checkbox" name={'wifi'}/><label for={'wifi'}>Бар</label></li>
                    <li><input type="checkbox" name={'wifi'}/><label for={'wifi'}>Теннис</label></li>
                    <li><input type="checkbox" name={'wifi'}/><label for={'wifi'}>СПА</label></li>
                </ul>
            </div>
        </div>
    )
}

export default FilterBar;