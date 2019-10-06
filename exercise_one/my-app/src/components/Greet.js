import React from "react";

// export default function Greet() {
//     return (
//         <div>
//             <p>Hello from Functional Component</p>
//         </div>
//     )
// }

const Greet =  (props)=> {
   console.log(props);
   
return  <p>Hello from Functional Component</p>
}


export default Greet