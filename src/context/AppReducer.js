
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)  => {
  switch(action.type) {
    //actions that are sent to the reducer are pulled apart by its type and payload

    //two params the type, and the payload - where the payload is the id in this case
    // delete transcation, takes the current state of the transactions object and then returns a new state using the
    //spread operator
    //transactions  takes state.filters throught our object - looks for the id we want to get rid of
    //and returns a compeletly new object without the id (payload)
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      case 'ADD_TRANSACTION':
        return{
          ...state,
          transactions:[action.payload, ...state.transactions]
        }
      default: return state;
  }
}
