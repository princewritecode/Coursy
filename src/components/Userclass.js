import React from "react";

export class User extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
        this.state = {
            userInfo: {
                name: 'default',
                id: 'dummy',
                avatar_url: 'dummyurl'
            }
        };
    }
    componentDidUpdate()
    {
        console.log('welcome to component did update after the update phase is completed');
    }
    async componentDidMount()
    {
        const data = await fetch('https://api.github.com/users/princewritecode');
        const value = await data.json();
        console.log(value);
        this.setState({
            userInfo: value
        });
    };
    render()
    {
        const { name, id, avatar_url } = this.state.userInfo;
        return (
            <>
                <h1>
                    {name}
                </h1>
                <p>{id}</p>
            </>
        );
    }
}