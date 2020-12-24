const setToken = (token) => {
    return  {
        type: 'SET_TOKEN',
        payload: token,
    }
}

const setLoggedIn = (isLoggedIn) => {
    return {
        type: 'SET_LOGGED_IN',
        payload: isLoggedIn
    }
}

const setUsername = (username) => {
    return {
        type: 'SET_USERNAME',
        payload: username,
    }
}

export {
    setToken,
    setLoggedIn,
    setUsername
}