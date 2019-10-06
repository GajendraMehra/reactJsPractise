import React from 'react'


export default function Hello() {
    // With Jx
    // return (
    //     <div>
    //         <h1>Hello from jsx demo</h1>
    //     </div>
    // )

    // Without jx
    return React.createElement('h1', {
        className: 'dummyClass'
    }, 'Hello from without jsx')
}