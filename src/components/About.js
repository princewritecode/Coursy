import React from "react";
export class About extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
        console.log(this);
        this.state = {
            count: 0
        };
    }
    render()
    {
        const { count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={() =>
                {
                    this.setState({
                        count: count + 1
                    });
                }}>+</button>
            </div>
        );
    };
}
