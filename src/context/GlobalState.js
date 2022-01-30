//context 
import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State - any global state will go in this object
//each transaction has a unique id, some text to identify the expense, and neg or postive amount to determine the kind of expense
const initialState = {
    transactions:[]
}

//Create Context - so we can share data amoungst all of the components
export const GlobalContext = createContext(initialState);

//provider component wraps around all of our items component
//the children are all of our components in the app section 
export const GlobalProvider = ({children}) =>{
    //state and dispatch will be used whenever we need to dispatch a reducer action
    //AppReducer will be in a diffrent file

    //takes the object that contains all of the data
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //All the actions that we will be using in globalContextprovider
    //want to delete
    //we pass the action and the ID which will tell us what will be deleted
    // the type tells the reducer what is being done, and the payload tells us which id to do it to
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }
    //add a transaction - takes in the entire transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }





    //when data is added or deleted

    //children will be all of the components in the App component  that are wrapped in the global context provider
    //the provider will provide a state or any actions
    //the value prop will take an object - for now we pass in our transactions so we can access any of the items in the object - to do that we use state.transactions
    //transactions in this case is passed state.transactions making it accessible where we want it
    return(<GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}} 
    
    >);
        {children} 
    </GlobalContext.Provider>);
}