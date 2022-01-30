//context 
import React, { createContext, useReducer} from 'react'

//Initial State - any global state will go in this object
//each transaction has a unique id, some text to identify the expense, and neg or postive amount to determine the kind of expense
const initialState = {
    transactions:[
        {id:1, text: 'flower', amount: -20},
        {id:2, text: 'Salary', amount: 300},
        {id:3, text: 'Book', amount: -10},
        {id:4, text: 'Camera', amount: 150},
    ]
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

    //children will be all of the components that are wrapped in the global context provider
    //the provider will provide a state or any actions
    //the value prop will take an object - for now we pass in our transactions so we can access any of the items in the object
    return(<GlobalContext.Provider value={{transactions:state.transactions}} />);
        {children}
    </GlobalContext.Provider>)

}