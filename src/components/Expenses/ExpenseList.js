import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    if(props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='list'>
            {props.item.map((expense) => (
                <ExpenseItem
                    //help react identify key of the items in array, so they can put the new item in a correct position
                    key={expense.id} // always use unique id when mapping the array
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
                ))}
        </ul>
    )
}

export default ExpensesList;