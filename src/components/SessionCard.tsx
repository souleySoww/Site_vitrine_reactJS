import React, { useContext } from 'react'
import {CardLight, CardNight} from '../styles/SessionCard.styled'
import { Session } from '../api/server';
import ThemeContext from '../context/ThemeContext';

/*type Session = {
    id: number;
    theme: string;
    duration: number;
    price: number;
    minParticipants: number;
    availableSlots: string[];
};*/

const SessionCard = ({session}: {session: Session}) => {
    const themeContext = useContext(ThemeContext);

    const CardComponent = themeContext?.theme === 'night' ? CardNight : CardLight;
    
    return (
        <CardComponent>
            <h2>{session.theme}</h2>
            <p>Duration: {session.duration} minutes</p>
            <p>Price: ${session.price}</p>
            <p>Minimum Participants: {session.minParticipants}</p>
            <div className="slot-list">
                {session.availableSlots.map((slot, index) => (
                <span key={index} className="slot-item">
                    {slot}
                </span>
                ))}
            </div>
        </CardComponent>
    )
}
export default SessionCard;