import React from 'react'

export default function ButtonLink(props) {
    const { className, href } = props;
    return (
        <a className={className} href={href}>
            {props.children}
        </a>
    )
}
