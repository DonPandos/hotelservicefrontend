// export function setHotels(hotelList) {
//     return {
//         type: 'SET_HOTELS',
//         payload: hotelList,
//     }
// }

const setHotels = (hotelList) => {
    return {
        type: 'SET_HOTELS',
        payload: hotelList,
    }
}

export {
    setHotels,
}