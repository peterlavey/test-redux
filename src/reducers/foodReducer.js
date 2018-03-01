export default function reducer(
    state = {
        todo: []
    },
    action
) {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                created: false,
                categories: action.payload
            };
        case 'LIST_FOOD':
            return {
                ...state,
                created: true,
                categories: action.payload
            };
    }

    return state;
};