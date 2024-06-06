'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ActionResponse } from '@/types/ActionResponse';
import { Loader2Icon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

interface IDeleteContactDialogProps {
  deleteAction: () => Promise<ActionResponse>;
}

export function DeleteContactDialog({ deleteAction }: IDeleteContactDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteContact() {
    setIsLoading(true);
    await deleteAction();
    setIsLoading(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="sm"
          className="h-8"
          variant="destructive"
          disabled={isLoading}
        >
          {isLoading && <Loader2Icon className="size-4 animate-spin" />}
          {!isLoading && <Trash2Icon className="size-4" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            O contato será deletado permanentemente e não poderá ser recuperado.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteContact}>
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
