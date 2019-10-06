import React from "react";

// export default function Greet() {
//     return (
//         <div>
//             <p>Hello from Functional Component</p>
//         </div>
//     )
// }

const Greet =  ({name,age})=> {
   // console.log(props);
   
return  (
   <div>
   <p> {name} age is {age}</p>
   
   </div>
)
}


export default Greet