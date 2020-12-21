const setToken = (token) => {
    return  {
        type: 'SET_TOKEN',
        payload: token,
    }
}

const setLoggedIn = () => {
    console.log('dispatched');
    return {
        type: 'SET_LOGGED_IN',
        payload: true
    }
}

export {
    setToken,
    setLoggedIn
}