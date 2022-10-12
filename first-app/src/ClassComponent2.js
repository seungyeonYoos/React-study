import { Component } from "react";

class ClassState extends Component{
    state = {
        number: 0,
    };
    render() {
        const {number} = this.state;
        return (
            <div>
                <h3>Number: {number}</h3>
                <button onClick={() => {this.setState({number: 1});}}>1로설정</button>
                <button onClick={() => {this.setState({number: 2});}}>2로설정</button>
                </div>
            
        );
    }

// static defaultProps = {

// }

//     render(){
//         // this.props = {
//         //     title: "zzz"
//         // } 딕셔너리 형태로 저장
//         // let { title } = this.props;
        
//         let valid = (props) => {
//             console.log(this.props.valid);
//         }


//         return(
//             <>
//                 <h2>{this.props.text}</h2>
//                 <button onClick={valid}>콘솔메세지</button>
//             </>
//         )
//     }
}
// ClassComponent.defaultProps = {
//     text: "이건 기본 text props입니다." 
// }

export default ClassState;