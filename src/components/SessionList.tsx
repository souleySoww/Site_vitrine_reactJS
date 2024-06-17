import React from 'react'
import SessionCard from './SessionCard';
import {List} from '../styles/SessionList.styled'

const sessions = [
    { title: 'Le Manoir Maudit', description: 'Découvrez les secrets du manoir hanté.' },
    { title: 'La Forêt des Ombres', description: 'Échappez aux créatures de la forêt sombre.' },
    { title: 'Le Cirque des Cauchemars', description: 'Survivez au cirque effrayant.' },
    { title: 'L’Asile Abandonné', description: 'Évitez les pièges de l’asile déserté.' },
    { title: 'Le Tombeau Maudit', description: 'Explorez les mystères du tombeau maudit.' }, 
    { title: "Le Labyrinthe de l'Enfer", description: "Trouvez votre chemin dans le labyrinthe infernal." }

];


  const SessionList = () => {
    return (
      <List>
        {sessions.map((session, index) => (
          <SessionCard key={index} title={session.title} description={session.description} />
        ))}
      </List>
    );
  };
  
  export default SessionList;