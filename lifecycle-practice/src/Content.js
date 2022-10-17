import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Product from "./Product";

function RouterTest (){
    return(
        <>
       
            {/* <Link to="/" style={{margin: "0 10px"}}>메인</Link>
            <Link to="/Product/:1/aaa/유승연" style={{margin: "0 10px"}}>1번 상품</Link>
            <Link to="/Product/:2/aaa/안수지" style={{margin: "0 10px"}}>2번 상품</Link>
            <Link to="/Product/:3/aaa/익명?productName=가방&price=1000#test" style={{margin: "0 10px"}}>3번 상품</Link>  */}
            {/* #뒤에 오는건 해쉬 */}
            <Routes>
                <Route path="/" element={<Main />} ></Route>
                <Route path="/Product/:id/aaa/:name" element={<Product />} ></Route> localhost:3000/product
                {/* <Route path="/*" element={< />} ></Route> */}
            </Routes>
        </>
    );
}

export default RouterTest;