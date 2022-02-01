import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import {
  FormButton,
  Form,
  Input,
  Label,
  LabelInputWrapper,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid(2) });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.addContact}>
        <LabelInputWrapper>
          <Label>Name</Label>
          <Input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required
          />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <Label>Number</Label>
          <Input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
            required
          />
        </LabelInputWrapper>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

export default ContactForm;
