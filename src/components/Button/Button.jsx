import React from "react";
import classNames from "classnames";

// class Button extends React.Component{
//
//     render(){
//         return<button className={classNames('button')}>{this.props.children}</button>
// }
//}


 export const Button=({className,outline,onClick, children})=>{
    return <button onClick={onClick} className={classNames('button', className,{
        'button-outline':outline
    })}>{children}</button>
}
