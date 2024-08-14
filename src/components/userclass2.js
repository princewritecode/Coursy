import React from "react";

export class User2 extends React.Component
{

    constructor(props)
    {
        super(props);
        console.log(props);
        console.log('child constructor of user2 class');
    }

    componentDidMount()
    {
        console.log('component did mount is called child user 2');
    }

    render()
    {
        console.log('chhild redner user 2');
        return (<h1>Hello from class componet user2</h1>);
    }

}