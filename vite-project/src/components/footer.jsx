import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
            <main className="main-container">
                <footer className="footer">
                    <img onClick={()=> navigate("/")} src="/menu-icon.png" alt="" />
                    <img src="/expense-icon.png" alt="" />
                    <div onClick={()=> navigate("/addTransaction")}>+</div>
                    <img src="/analytic-icon.svg" alt="" />
                    <img src="profile-icon2.png" alt="" />
                </footer>
            </main>
        </>
    )
}

export default Footer;