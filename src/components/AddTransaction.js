import React, { useState } from 'react';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount,setAmount] = useState(0)

  return <>
    <h3>Add new Transaction</h3>
    <form action="">
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
