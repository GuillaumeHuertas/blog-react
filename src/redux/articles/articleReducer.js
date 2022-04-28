const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action) {


    switch(action.type) {
        case 'ADD_ARTICLE': {
            console.log('passe dans ADD_ARTICLE')
            const newArr = [...state.articles];
            newArr.unshift(action.payload); // Ajoute le nouvel article au débur du tableau 

            return {
                ...state, // utile si d'autres props
                articles: newArr
            }

        }
        case "LOAD_ARTICLE": {

            console.log('LOAD_ARTICLE')

            return {
                ...state,
                articles: action.payload
            }
        }
    }
    return state; 
}

export default articleReducer; 

export const getArticles = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        dispatch({
            type: 'LOAD_ARTICLE',
            payload: data
        })
    })
}