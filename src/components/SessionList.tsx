import React, {useEffect, useState} from 'react'
import SessionCard from './SessionCard';
import {List} from '../styles/SessionList.styled'


/*const sessions = [
    { title: 'Le Manoir Maudit', description: 'Découvrez les secrets du manoir hanté.' },
    { title: 'La Forêt des Ombres', description: 'Échappez aux créatures de la forêt sombre.' },
    { title: 'Le Cirque des Cauchemars', description: 'Survivez au cirque effrayant.' },
    { title: 'L’Asile Abandonné', description: 'Évitez les pièges de l’asile déserté.' },
    { title: 'Le Tombeau Maudit', description: 'Explorez les mystères du tombeau maudit.' }, 
    { title: "Le Labyrinthe de l'Enfer", description: "Trouvez votre chemin dans le labyrinthe infernal." }

];*/

type Session = {
  id: number;
  theme: string;
  duration: number;
  price: number;
  minParticipants: number;
  availableSlots: string[];
};


const SessionList = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  useEffect(() => {
      const fetchSessions = async () => {
          try{
            const response = await fetch("http://localhost:3000/sessions");
            const data = await response.json();
            setSessions(data);
          }
          catch(error){
            console.error("Error fetching sessions", error);
          }
      };
      fetchSessions(); 
  }, [])
  return (
    <List>
      {sessions.map(session => ( 
      <SessionCard key={session.id} session={session}/>
    ))}
    </List>
  );
};

export default SessionList;