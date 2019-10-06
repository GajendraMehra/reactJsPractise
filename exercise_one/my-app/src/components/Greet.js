import React from "react";

// export default function Greet() {
//     return (
//         <div>
//             <h4>Hello from Functional Component</h4>
//         </div>
//     )
// }

const Greet =  (props)=> {
   console.log(props);
   
return  <h1>Hello from Functional Component</h1>
}


export default Greet