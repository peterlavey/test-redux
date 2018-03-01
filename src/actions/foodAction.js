import axios from 'axios';


export function getFood() {
    return function(dispatch) {
        axios.get('http://localhost:7003/test-redux/food').then(response => {
            dispatch({
                type: 'LIST_FOOD',
                payload: response.data
            });
        }).catch(err => {
            //dispatch();
        });
    }
}