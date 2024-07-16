import React, { useContext, useEffect, useState } from 'react';
import { ContainerLight, ContainerNight, FormLight, FormNight, FormGroup, Label, InputLight, InputNight, ButtonLight, ButtonNight } from '../styles/ReservationForm.styled';
import { Session } from "../api/server";
import ThemeContext from '../context/ThemeContext';

const ReservationForm: React.FC = () => {
    const [form, setForm] = useState({email: "", nbAttendees: "", session: 0, slot: ""});
    const [sessions, setSessions] = useState<Session[]>([]);
    const [slot, setSlot] = useState<string[]>([])
    const themeContext = useContext(ThemeContext);

    const Container = themeContext?.theme === 'night' ? ContainerNight : ContainerLight;
    const Form = themeContext?.theme === 'night' ? FormNight : FormLight;
    const Input = themeContext?.theme === 'night' ? InputNight : InputLight;
    const Button = themeContext?.theme === 'night' ? ButtonNight : ButtonLight;
    
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

    useEffect(() => {
        const selectedSession = sessions.find((session) => +session.id === +form.session);
        if (selectedSession) {
            setSlot(selectedSession.availableSlots);
        } else {
            setSlot([])
        }
    }, [form.session, sessions]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validateFormAttendess()) {
            console.log("Reservation form submitted: ", form);
            setForm({ email: "", nbAttendees: "", session: 0, slot: "" });
        }
    };

    const validateFormAttendess = () => {
        const selectedSession = sessions.find((session) => +session.id === +form.session);
        if (selectedSession) {
            if (parseInt(form.nbAttendees) < selectedSession.minParticipants) {
                alert(`Le nombre minimum de participants est ${selectedSession.minParticipants}`);
                return false;
            }
            return true;
        } 

        return false        
    };

    return (
        <Container>
            <h2>Formulaire de réservation</h2>
            <Form onSubmit={handleSubmit}>                
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="nbAttendees">Nombre de participants</Label>
                    <Input type="number" id="nbAttendees" name="nbAttendees" value={form.nbAttendees} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="session">Session</Label>
                    <Input as="select" id="session" name="session" value={form.session} onChange={handleChange} required>
                        <option value="">Choisissez une session</option>
                        {sessions.map((session, index) => (
                            <option key={index} value={session.id}>{session.theme}</option>
                        ))}
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="slot">Créneaux</Label>
                    <Input as="select" id="slot" name="slot" value={form.slot} onChange={handleChange} required>
                        <option value="">Choisissez un créneau</option>
                        {slot.map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                        ))}
                    </Input>
                </FormGroup>

                <Button type="submit">Réserver</Button>
            </Form>
        </Container>
    );
};

export default ReservationForm;
