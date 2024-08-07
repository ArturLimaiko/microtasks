import React from 'react';

type HeaderType = {
    HeaderTitle:string
}

export const Header = ({HeaderTitle}: HeaderType) => {
    return (
        <h3>
            {HeaderTitle}
        </h3>
    );
};