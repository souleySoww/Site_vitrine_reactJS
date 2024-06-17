import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, TextArea, Button } from '../styles/ContactForm.styled';

const ContactForm = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]:value}));
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submitted :", form);
        setForm({name: "", email: "", message: ""});
    };

    return (
        <Container>
            <h2>Formulaire de Contact</h2>
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
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" name="message" value={form.message} onChange={handleChange} required />
                </FormGroup>
                <Button type="submit">Envoyer</Button>
            </Form>
        </Container>
    );
}
export default ContactForm;

