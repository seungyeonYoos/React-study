import { useParams, useLocation, useSearchParams, useNavigate } from "react-router-dom";

function Product (){
    const { id , name } = useParams();
    // { id : 1} //형태로 담아질것 localhost:3000/Product/1
    const Param = useParams(); //Param.id 로 쓸 수 있음
    const location = useLocation();
    console.log(location);
    let navigate = useNavigate();

    let [searchParam, setSearchParam] = useSearchParams();
    console.log("searchParam",searchParam);
    searchParam.get("price");

    return(
        <>
        <h1>{id}번 상세페이지입니다.</h1>
        <h3>이름은 {name}</h3>
        <div>{location.search}</div>
        <div>가격은 {searchParam.get("price")}</div>
        
        <ul>
            <li><button onClick={()=> navigate(-1)}>Go back</button></li>
            <li><button onClick={()=> navigate(1)}>Go forward</button></li>
            <li><button onClick={()=> navigate('/')}>Go root</button></li>
        </ul>

        </>
    );
}
export default Product;