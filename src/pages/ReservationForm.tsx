import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from '../styles/ReservationForm.styled';

const ReservationForm: React.FC = () => {
    const [form, setForm] = useState({name: "", email: "", phone: "", date: "", session: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reservation form submitted: ", form);
        setForm({ name: "", email: "", phone: "", date: "", session: "" });
    };

    return (
        <Container>
            <h2>Formulaire de réservation</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Nom</Label>
                    <Input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="session">Session</Label>
                    <Input as="select" id="session" name="session" value={form.session} onChange={handleChange} required>
                        <option value="">Choisissez une session</option>
                        <option value="Le Manoir Maudit">Le Manoir Maudit</option>
                        <option value="La Forêt des Ombres">La Forêt des Ombres</option>
                        <option value="Le Cirque des Cauchemars">Le Cirque des Cauchemars</option>
                        <option value="L’Asile Abandonné">L’Asile Abandonné</option>
                        <option value="Le Tombeau Maudit">Le Tombeau Maudit</option>
                        <option value="Le Labyrinthe de l'Enfer">Le Labyrinthe de l'Enfer</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Réserver</Button>
            </Form>
        </Container>
    );
};

export default ReservationForm;
