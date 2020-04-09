const appData = {
    headers: {}
};

export default (state = appData, action) => {
    switch (action.type) {
        case 'ADD_LOGIN_TOKEN':
            if (localStorage.getItem('Authorization') !== action.payload) {
                localStorage.setItem('Authorization', action.payload);
            }
            return {
                headers: {
                    'Authorization': "Bearer " + action.payload,
                }
            };
        case 'removeToken':
            return {
                headers: {}
            }
        default:
            return state;
    }
}