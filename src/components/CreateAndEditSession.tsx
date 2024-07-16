import React, { useState, useEffect, useContext } from 'react';
import { getSessions, addSession, updateSession, deleteSession } from '../api/ApiService';
import {
  ContainerLight, ContainerNight,
  TitleLight, TitleNight,
  FormGroup,
  LabelLight, LabelNight,
  InputLight, InputNight,
  ButtonLight, ButtonNight,
  EmployeeListContainer,
  EmployeeItem,
  EditButtonLight, EditButtonNight,
  DeleteButtonLight, DeleteButtonNight
} from '../styles/EmployeeList.styled';
import ThemeContext from '../context/ThemeContext';

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
  const [newSession, setNewSession] = useState<Session>({
    id: 0,
    theme: '',
    duration: 0,
    price: 0,
    minParticipants: 0,
    availableSlots: [],
  });
  const [editSession, setEditSession] = useState<Session | null>(null);
  const themeContext = useContext(ThemeContext);

  const Container = themeContext?.theme === 'night' ? ContainerNight : ContainerLight;
  const Title = themeContext?.theme === 'night' ? TitleNight : TitleLight;
  const Label = themeContext?.theme === 'night' ? LabelNight : LabelLight;
  const Input = themeContext?.theme === 'night' ? InputNight : InputLight;
  const Button = themeContext?.theme === 'night' ? ButtonNight : ButtonLight;
  const EditButton = themeContext?.theme === 'night' ? EditButtonNight : EditButtonLight;
  const DeleteButton = themeContext?.theme === 'night' ? DeleteButtonNight : DeleteButtonLight;

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const data = await getSessions();
    setSessions(data);
  };

  const handleAdd = async () => {
    await addSession(newSession);
    setNewSession({
      id: 0,
      theme: '',
      duration: 0,
      price: 0,
      minParticipants: 0,
      availableSlots: [],
    });
    fetchSessions();
  };

  const handleUpdate = async () => {
    if (editSession) {
      await updateSession(editSession.id, editSession);
      setEditSession(null);
      fetchSessions();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteSession(id);
    fetchSessions();
  };

  return (
    <Container>
      <Title>Escape Game Sessions</Title>

      <h3>Add New Session</h3>
      <FormGroup>
        <Label htmlFor="theme">Theme</Label>
        <Input
          id="theme"
          type="text"
          placeholder="Theme"
          value={newSession.theme}
          onChange={(e) => setNewSession({ ...newSession, theme: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          id="duration"
          type="number"
          placeholder="Duration"
          value={newSession.duration}
          onChange={(e) => setNewSession({ ...newSession, duration: parseInt(e.target.value) })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="price">Price ($)</Label>
        <Input
          id="price"
          type="number"
          placeholder="Price"
          value={newSession.price}
          onChange={(e) => setNewSession({ ...newSession, price: parseInt(e.target.value) })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="minParticipants">Min Participants</Label>
        <Input
          id="minParticipants"
          type="number"
          placeholder="Min Participants"
          value={newSession.minParticipants}
          onChange={(e) => setNewSession({ ...newSession, minParticipants: parseInt(e.target.value) })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="availableSlots">Available Slots (comma separated)</Label>
        <Input
          id="availableSlots"
          type="text"
          placeholder="Available Slots"
          value={newSession.availableSlots.join(', ')}
          onChange={(e) => setNewSession({ ...newSession, availableSlots: e.target.value.split(', ') })}
        />
      </FormGroup>
      <Button onClick={handleAdd}>Add new Session</Button>

      <h3>Update Session</h3>
      {editSession && (
        <>
          <FormGroup>
            <Label htmlFor="editTheme">Theme</Label>
            <Input
              id="editTheme"
              type="text"
              placeholder="Theme"
              value={editSession.theme}
              onChange={(e) => setEditSession({ ...editSession, theme: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="editDuration">Duration (minutes)</Label>
            <Input
              id="editDuration"
              type="number"
              placeholder="Duration"
              value={editSession.duration}
              onChange={(e) => setEditSession({ ...editSession, duration: parseInt(e.target.value) })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="editPrice">Price ($)</Label>
            <Input
              id="editPrice"
              type="number"
              placeholder="Price"
              value={editSession.price}
              onChange={(e) => setEditSession({ ...editSession, price: parseInt(e.target.value) })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="editMinParticipants">Min Participants</Label>
            <Input
              id="editMinParticipants"
              type="number"
              placeholder="Min Participants"
              value={editSession.minParticipants}
              onChange={(e) => setEditSession({ ...editSession, minParticipants: parseInt(e.target.value) })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="editAvailableSlots">Available Slots (comma separated)</Label>
            <Input
              id="editAvailableSlots"
              type="text"
              placeholder="Available Slots"
              value={editSession.availableSlots.join(', ')}
              onChange={(e) => setEditSession({ ...editSession, availableSlots: e.target.value.split(', ') })}
            />
          </FormGroup>
          <Button onClick={handleUpdate}>Update Session</Button>
        </>
      )}

      <EmployeeListContainer>
        {sessions.map((session) => (
          <EmployeeItem key={session.id}>
            {session.theme} - {session.duration} minutes - ${session.price} - {session.minParticipants} min participants
            <br />
            Slots: {session.availableSlots.join(', ')}
            <div>
              <EditButton onClick={() => setEditSession(session)}>Edit</EditButton>
              <DeleteButton onClick={() => handleDelete(session.id)}>Delete</DeleteButton>
            </div>
          </EmployeeItem>
        ))}
      </EmployeeListContainer>
    </Container>
  );
};

export default SessionList;
