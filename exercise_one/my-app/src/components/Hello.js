import React from 'react'


export default function Hello() {
    // With Jx
    // return (
    //     <div>
    //         <p>Hello from jsx demo</p>
    //     </div>
    // )

    // Without jx
    return React.createElement('p', {
        className: 'dummyClass'
    }, 'Hello from without jsx')
}