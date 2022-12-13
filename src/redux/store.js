import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cardReducer } from "./reducers/card"
import { drawerReducer } from "./reducers/drawer"
import { productDetailReducer } from "./reducers/productDetail"
import { productsReducer } from "./reducers/products"
import { searchReducer } from "./reducers/search"


const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []

let initialState = {
   card: {cardItems}
}

const reducers = combineReducers({
    drawer : drawerReducer,
    products : productsReducer,
    product : productDetailReducer,
    card: cardReducer,
    search : searchReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
