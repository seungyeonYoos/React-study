import { BrowserRouter, Route, Routes } from "react-router-dom";

function RouterTest (){
    return(
        <BrowserRouter>
            <Routes>
                <Link to="/" style={margin="5px"}>메인</Link>
                <Link to="/Product">상품</Link>
                <Route path="/" element={<Main />} ></Route>
                <Route path="/product" element={<Product />} ></Route> localhost:3000/product
                {/* <Route path="/*" element={< />} ></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RouterTest;