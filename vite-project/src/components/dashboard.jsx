import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
    const [userData, setUserData] = useContext(UserContext);





    return (
        <>
            <main className="main-container">
                <div className="total-balance">
                    <h3>TOTAL BALANCE</h3>
                    <h2>{}</h2>
                </div>
                <div className="turn-over">
                    <div>
                        <p>INCOME</p>
                        <h3>{}</h3>
                    </div>
                    <div>
                        <p>EXPENSES</p>
                        <h3>{}</h3>
                    </div>
                </div>
                <div className="spend-analytic">
                    <h3>Spend Analytics</h3>
                    <p>Your spend less on dining this week</p>
                </div>
                <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <p>VIEW ALL</p>
                </div>
                <div className="activity-container">

                </div>
            </main>
        </>
    )
}

export default Dashboard;