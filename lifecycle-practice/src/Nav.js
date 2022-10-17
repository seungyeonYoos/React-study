import { Link } from "react-router-dom";


function Nav (){
    return(
        <div style={{backgroundColor: '#E8D9FF'}}>
            <h1>navbar 입니다.</h1>
            <Link to="/" style={{margin: "10px"}}>메인</Link>
            <Link to="/Product/1/aaa/유승연?ProductName=안수지&price=2000#test" style={{margin: "10px"}}>1번 상품</Link>
            <Link to="/Product/2/aaa/안수지?ProductName=유승연&price=3000#test" style={{margin: "10px"}}>2번 상품</Link>
            <Link to="/Product/3/aaa/익명?ProductName=김소연&price=4000#test" style={{margin: "0 10px"}}>3번 상품</Link>
            
        </div>
    )
}
export default Nav;