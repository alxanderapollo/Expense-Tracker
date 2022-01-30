import React from 'react';

export const Transaction = ({transaction}) => {
    //if the amount is less than zero we put a minue otherwise we put a plus
    const sign = transaction.amount < 0 ? '-' : '+';
    //dynamic class if the sign is minus red border otherwise green border
  return  <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
  {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button className="delete-btn">x</button>
  </li>;
};
