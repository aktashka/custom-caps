const defaultState = {
    caps: [],
    loading: false,
    error: false,
    cartItems: [
        {
        itemPic: 1,
        amount: 2,
        size: 'l',
        brandName: 'blahblah',
        capName: 'saveuslord',
        price: '3200',
        },
        {
            itemPic: 1,
            amount: 2,
            size: 'l',
            brandName: 'blahblah',
            capName: 'saveuslord',
            price: '3200',
            }
    ]
}


const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'CAPS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'CAPS_LOADED':
            return {
                ...state,
                caps: action.payload,
                error: false,
                loading: false,
            };
        case 'CAPS_ERROR':
            return {
                ...state,
                caps: [],
                error: true,
                loading: false,
            };
        default:
            return state;
    }
}

export default reducer