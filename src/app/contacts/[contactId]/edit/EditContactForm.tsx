'use client'

import { ContactForm } from '@/components/ContactForm';
import { Contact } from '@prisma/client';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export function EditContactForm({ contact }: { contact: Contact }) {
  async function handleSubmit(data: { name: string; email: string }) {
    await fetch(`/api/contacts/${contact.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <>
      <header>
        <Link
          href="/"
          className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Voltar para a lista</span>
        </Link>
        <h1 className="font-semibold text-3xl tracking-tighter">
          Editar contato
        </h1>
      </header>

      <ContactForm
        contact={contact}
        submitAction={handleSubmit}
      />
    </>
  );
}
