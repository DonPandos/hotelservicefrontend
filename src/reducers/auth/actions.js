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

const setUsernameInfo = (username, firstname, lastname) => {
    return {
        type: 'SET_USERNAME',
        payload: {
            username: username,
            firstname: firstname,
            lastname: lastname,
        }
    }
}

export {
    setToken,
    setLoggedIn,
    setUsernameInfo,
}