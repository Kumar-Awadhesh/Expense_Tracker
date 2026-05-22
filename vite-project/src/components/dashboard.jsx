import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [viewAll, setViewAll] = useState(false);

    const {userData, setUserData, balance, setBalance} = useContext(UserContext);

  
    useEffect(() => {
        const userDetail = JSON.parse(localStorage.getItem("userData"))
        if(userDetail){
            setUserData(userDetail);
            setBalance(userDetail[userDetail.length - 1].totalBalance)
            const allIncome = userDetail.reduce((acc, item)=> acc + Number(item.income || 0), 0 )
            setTotalIncome(allIncome);
            const allExpense = userDetail.reduce((acc, item)=> acc + Number(item.expense || 0), 0 )
            setTotalExpense(allExpense);
            setBalance(Number(allIncome - allExpense))
        }
        else{
            alert("User Data empty!")
            return;
        } 
    }, [])

    



    return (
        <>
            <main className="main-container">
                <div className="total-balance">
                    <h3>TOTAL BALANCE</h3>
                    {
                        <h2>${balance}</h2>
                    }

                </div>
                <div className="turn-over">
                    <div>
                        <p>INCOME</p>
                        <h3>${totalIncome}</h3>                    
                    </div>
                    <div>
                        <p>EXPENSES</p>
                        <h3>${totalExpense}</h3>
                    </div>
                </div>
                <div className="spend-analytic">
                    <h3>Spend Analytics</h3>
                    <p>Your spend less on dining this week</p>
                </div>
                <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <h4 onClick={(e)=> viewAll ? setViewAll(false) : setViewAll(true)}>{viewAll ? <p>View Less</p> : <p>View All</p>}</h4>
                </div>
                <div className={viewAll ? "activity-container-show" : "activity-container-hide"}>
                    {
                        userData.map((item, index)=> (
                            <div className="transaction-container" key={index}>
                                <div>
                                    <h3>{item.note}</h3>
                                    <p>{item.category}</p>
                                </div>
                                <div>
                                    {
                                        item.income ?
                                        <div>
                                            <h3>+${item.income}</h3>
                                            <p>{item.date}</p>
                                        </div> :
                                        <div>
                                            <h3>-${item.expense}</h3>
                                            <p>{item.date}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Dashboard;