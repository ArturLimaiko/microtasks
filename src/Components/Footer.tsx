import React from 'react';

type FooterType = {
    FooterTitle: string
}

export const Footer = ({FooterTitle}: FooterType) => {
    return (
        <div>
            <span> {FooterTitle} </span>
        </div>
    );
};