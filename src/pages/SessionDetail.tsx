import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/SessionDetail.styled';

const sessions = [
  { id: '1', title: 'Le Manoir Maudit', description: 'Découvrez les secrets du manoir hanté.' },
  { id: '2', title: 'La Forêt des Ombres', description: 'Échappez aux créatures de la forêt sombre.' },
  { id: '3', title: 'Le Cirque des Cauchemars', description: 'Survivez au cirque effrayant.' },
  { id: '4', title: 'L’Asile Abandonné', description: 'Évitez les pièges de l’asile déserté.' },
  { id: '5', title: 'Le Tombeau Maudit', description: 'Explorez les mystères du tombeau maudit.' },
  { id: '6', title: 'Le Labyrinthe de l\'Enfer', description: 'Trouvez votre chemin dans le labyrinthe infernal.' },
];

const SessionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const session = sessions.find(session => session.id === id);

  if (!session) {
    return <Container>Session non trouvée</Container>;
  }

  return (
    <Container>
      <h2>{session.title}</h2>
      <p>{session.description}</p>
    </Container>
  );
};

export default SessionDetail;