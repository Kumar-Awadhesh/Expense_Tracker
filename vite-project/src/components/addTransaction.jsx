import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";

const AddTransaction = () => {
    const [enableIncome, setEnableIncome] = useState(false);
    const [enableExpense, setEnableExpense] = useState(false);
    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [expense, setExpense] = useState("");
    const [income, setIncome] = useState("");
    const [category, setCategory] = useState("");
    const [note, setNote] = useState("");
    const [balance, setBalance] = useState("30000")
    

    const [userData, setUserData] = useContext(UserContext);
3

    const getDays = (e) => {
        const currentDate = (e.target.value);
        const currentDay = new Date(currentDate).toLocaleDateString("en-US", {
            weekday: "long"
        })
        console.log(currentDate)
        setDay(currentDay);
        setDate(currentDate);
    }

    const saveTransaction = () => {
        const allData = {
            income: income,
            expense: expense,
            day: day,
            date: date,
            category: category,
            note: note,
            balance: balance
        }
    
        const userDetail =  [...userData, allData]
        setUserData(userDetail);
        localStorage.setItem("userData", JSON.stringify(userDetail));
        console.log(userDetail)
    }

    const incomeBtn = () => {
        setEnableIncome(true)
        setEnableExpense(false)
    }

    const expenseBtn = () => {
        setEnableExpense(true)
        setEnableIncome(false);
    }


    return (
        <>
            <main className="main-container">
                <div className="add-transaction">
                    <p>X</p>
                    <h3>Add Transaction</h3>
                </div>
                <div className="transaction-btn-container">
                    <button className={enableExpense ? "expense-btn" : ""} onClick={expenseBtn} >EXPENSE</button>
                    <button className={enableIncome ? "income-btn" : ""} onClick={incomeBtn}>INCOME</button>
                </div>
                <div className="amount-container">
                    <h4>AMOUNT</h4>
                    <div className="amount-input-container">
                        <div><p>$</p></div>
                        {
                            enableIncome ?
                                <div>
                                    <input type="number" placeholder="0.00" onChange={(e) => setIncome(e.target.value)} />
                                </div> :
                                <div>
                                    <input type="number" placeholder="0.00" onChange={(e) => setExpense(e.target.value)} />
                                </div>
                        }
                    </div>
                </div>
                <h3 className="category">CATEGORY</h3>
                <div className="category-container">
                    <div onClick={(e) => setCategory("Food")}>
                        <img src="/diner-icon.png" alt="" />
                        <p>FOOD</p>
                    </div>
                    <div onClick={(e) => setCategory("Shopping")}>
                        <img src="/shopping-icon.png" alt="" />
                        <p>SHOPPING</p>
                    </div>
                    <div onClick={(e) => setCategory("Travel")}>
                        <img src="/car-icon.png" alt="" />
                        <p>TRAVEL</p>
                    </div>
                    <div onClick={(e) => setCategory("Rent")}>
                        <img src="/home-icon.png" alt="" />
                        <p>RENT</p>
                    </div>
                    <div onClick={(e) => setCategory("Health")}>
                        <img src="/health-icon.png" alt="" />
                        <p>HEALTH</p>
                    </div>
                    <div onClick={(e) => setCategory("Leisure")}>
                        <img src="/leisure-icon.png" alt="" />
                        <p>LEISURE</p>
                    </div>
                    <div onClick={(e) => setCategory("Bills")}>
                        <img src="/cash-icon.png" alt="" />
                        <p>BILLS</p>
                    </div>
                    <div>
                        <b>...</b> <br />
                        <p>OTHER</p>
                    </div>
                </div>
                <div className="date-container">
                    <h3>DATE</h3>
                    <input type="date" placeholder="" onChange={((e) => getDays(e))} />
                </div>

                <div className="date-container">
                    <h3>NOTE</h3>
                    <input type="text" placeholder="Add a description..." onChange={(e) => setNote(e.target.value)} />
                </div>
                <div className="save-transaction">
                    <button onClick={saveTransaction}>Save Transaction</button>
                </div>
            </main>
        </>
    )
}

export default AddTransaction;