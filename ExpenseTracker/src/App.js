// import React from "react";
// import ReactDOM from "react-dom/client";
// import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
//
//
// function App(props) {
//   const expenses = [
//     {
//       id: 'e1',
//       title:'Toilet Paper',
//       amount:94.12,
//       date: new Date(2021,4,4 )
//     },
//     {
//       id: 'e2',
//       title:'New TV',
//       amount:944.12,
//       date: new Date(2021,7,4 )
//     },
//     {
//       id: 'e3',
//       title:'Car Insurance',
//       amount:332,
//       date: new Date(2022,11,4 )
//     }
//
//   ];
//  const addExpenseHandler = (expense) => {
//    console.log(expense)
//
//  };
//   return (
//       <div>
//          <NewExpense onAddExpense = {addExpenseHandler}/>
//           <div className="container">
//             <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}/>
//             <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}/>
//             <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}/>
//           </div>
//       </div>
//
//
//   );
// }
//
// export default App;

import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const InitialExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {
    const [expenses,setExpenses] = useState(InitialExpenses)

    const addExpenseHandler = expense => {
       setExpenses(prevExpenses =>{
        return [expense,...prevExpenses]
       })
    };

    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2', {}, "Let's get started!"),
    //   React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
