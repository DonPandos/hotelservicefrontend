import s from './FilterBar.module.css'

const FilterBar = (props) => {
    return (
        <div className={s.root}>
            <div className={s.label}><p>Город</p></div>
            <select className={s.citySelect}>
                <option value="as">Святогорск</option>
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