'use client'

import { FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface IContactFormProps {
  contact?: {
    name: string;
    email: string;
  };
  onSubmit?: (formData: {
    name: string;
    email: string;
  }) => void;
}

export function ContactForm({ contact, onSubmit }: IContactFormProps) {
  const [name, setName] = useState(contact?.name ?? '');
  const [email, setEmail] = useState(contact?.email ?? '');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.({ name, email });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <Label>Nome</Label>
        <Input
          value={name}
          name="name"
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <Label>E-mail</Label>
        <Input
          value={email}
          name="email"
          onChange={event => setEmail(event.target.value)}
        />
      </div>


      <Button type="submit">
        {contact ? 'Salvar' : 'Criar'}
      </Button>
    </form>
  );
}
