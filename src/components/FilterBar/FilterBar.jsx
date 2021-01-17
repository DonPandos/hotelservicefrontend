import s from './FilterBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setHotels} from "../../reducers/hotel/actions";
import API from "../../utils/API";
import {useEffect, useState} from "react";

const FilterBar = (props) => {
    const cities = useSelector(state => state.city.cities);
    const citiesMap = cities.map(cityItem => <option value={cityItem.id}>{cityItem.name}</option>)
    const dispatch = useDispatch();
    const [ facilities, setFacilities ] = useState([]);

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

    const handleOnFacilityChanged = (event) => {
        if(event.target.checked) {
            setFacilities(facilities.concat([event.target.value]));
        } else {
            setFacilities(facilities.filter((item) => {
                return item !== event.target.value;
            }))
        }
    }

    useEffect(() => {
        if(facilities.length == 0) {
            API.get('/hotels')
                .then((response) => {
                    dispatch(setHotels(response.data))
                });
        } else {
            API.get('/hotels/facilities?facilitiesId=' + facilities.map(el => el), {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.data)
                    dispatch(setHotels(response.data))
                })
        }
    }, [facilities])

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
                    <li><input type="checkbox" value={'1'} name={'wifi'} onChange={handleOnFacilityChanged}/><label for={'wifi'}>Wi-Fi</label></li>
                    <li><input type="checkbox" value={'2'} name={'parking'} onChange={handleOnFacilityChanged}/><label for={'wifi'}>Парковка</label></li>
                    <li><input type="checkbox" value={'3'} name={'bar'} onChange={handleOnFacilityChanged}/><label for={'wifi'}>Бар</label></li>
                    <li><input type="checkbox" value={'4'} name={'tennis'} onChange={handleOnFacilityChanged}/><label for={'wifi'}>Теннис</label></li>
                    <li><input type="checkbox" value={'5'} name={'spa'} onChange={handleOnFacilityChanged}/><label for={'wifi'}>СПА</label></li>
                </ul>
            </div>
        </div>
    )
}

export default FilterBar;