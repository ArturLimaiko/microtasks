import React from 'react';

type BodyType = {
    description: string
}

export const Body = ({description}: BodyType) => {
    return (
        <div>
            <p> {description} </p>
        </div>
    );
};