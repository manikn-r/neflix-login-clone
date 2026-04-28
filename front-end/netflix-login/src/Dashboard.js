
import movie03 from "./assets/movie03.jpg"
import movie04 from "./assets/movie04.jpg"
import movie05 from "./assets/movie05.jpg"

import logo from "./assets/logo3.png";
function Dashboard() {
    return (<>
        <div className="containerTwo">
            <div className="logo">
                <img src={logo} alt=""></img>
            </div>
            <div className="activeMovie">
                {/* <img src={movie01} alt=""></img> */}
            </div>
        </div>
        <div className="watchNowTitle"><h1>Watch Now</h1></div>
        <div className="watchNow">
            <div className="movies">
                <img src={movie03} alt=""></img>
                <p>Leo</p>
            </div>
            <div className="movies">
                <img src={movie04} alt=""></img>
                <p>Vidamuyarchi</p>
            </div>
            <div className="movies">
                <img src={movie05} alt=""></img>
                <p>Thiruchitrampalam</p>
            </div>
            <div className="movies">
                <img src={movie03} alt=""></img>
                <p>Leo</p>
            </div>
        </div>
    </>)
}
export default Dashboard;