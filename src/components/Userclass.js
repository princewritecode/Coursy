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
        const { name, id, avatar_url, bio, url } = this.state.userInfo;
        return (
            <>

                <div className="flex flex-col items-center gap-4">
                    <img className="w-48" src={avatar_url}></img>
                    <h1 className="font-bold">
                        {name}
                    </h1>
                    <p>{bio}</p>
                    <a className="py-2 px-4 border rounded-md my-2 bg-green-300" href='https://my-portfolio-ten-self.vercel.app/'><button>My Work</button></a>
                </div>
            </>
        );
    }
}