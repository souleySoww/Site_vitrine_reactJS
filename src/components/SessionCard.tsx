import React from 'react'
import {Card} from '../styles/SessionCard.styled'

type SessionCardProps = {
    title: String;
    description: String;
}

const SessionCard = ({title, description}: SessionCardProps) => {
    return (
        <Card>
            <h2>{title}</h2>
            <p>{description}</p>
        </Card>
    )
}
export default SessionCard;