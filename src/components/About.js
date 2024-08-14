import React from "react";
import { User } from './Userclass';
import { User2 } from './userclass2';
export class About extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <User></User>
            </div>
        );
    }
};

