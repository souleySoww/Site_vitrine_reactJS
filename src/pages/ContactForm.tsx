import React, { useContext, useState } from 'react';
import { ContainerLight, ContainerNight, FormLight, FormNight, FormGroup, Label, InputLight, InputNight, TextAreaLight, TextAreaNight, ButtonLight, ButtonNight } from '../styles/ContactForm.styled';
import ThemeContext from '../context/ThemeContext';

const ContactForm = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const themeContext = useContext(ThemeContext);

    const Container = themeContext?.theme === 'night' ? ContainerNight : ContainerLight;
    const Form = themeContext?.theme === 'night' ? FormNight : FormLight;
    const Input = themeContext?.theme === 'night' ? InputNight : InputLight;
    const TextArea = themeContext?.theme === 'night' ? TextAreaNight : TextAreaLight;
    const Button = themeContext?.theme === 'night' ? ButtonNight : ButtonLight;

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

