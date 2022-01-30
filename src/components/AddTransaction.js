import React from 'react';

export const AddTransaction = () => {
  return <>
    <h3>Add new Transaction</h3>
    <form action="">
        <div className="form-control">
            <label htmlFor="text" >Text</label>
            <input type="text" placeholder="Enter text..." id="text" />
        </div>
        <div className="form-control">
            <label htmlFor="amount" >Amount <br/> 
            (negative - expense, postive - income)
            </label>
            <input type="number" placeholder="Enter amount..." id="amount" />
        </div>

    </form>

  </>;
};
