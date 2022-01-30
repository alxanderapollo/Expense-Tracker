import React, {useContext, useState } from 'react';
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    //upon submitting the form 
    //e.preventDefault will keep the page from refreshing
    //neew transaction object will take what we stored the states
    //math.floor will generate the random id to be stored
    //information is coming in a as string we are parsing it into a number by adding +amount
    const onSubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() *10000000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
    }


  return <>
    <h3>Add new Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text" >Text</label>
            {/*  e is the value that inputted by the user that is passed into our onchage and set as the value by the form*/}
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." id="text" />
        </div>
        <div className="form-control">
            <label htmlFor="amount" >Amount <br/> 
            (negative - expense, postive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." id="amount" />
        </div>
        <button className="btn">Add Transaction</button>

    </form>

  </>;
};
