'use client';

import postComment from '@/actions/post-comment';
import React from 'react';
import { useToast } from '../ui/use-toast';
import { CommentOnPost } from '@/tipos';

type TextAreaFormProps = {
  placeholder?: string;
  newsId: string;
};

export default function TextAreaForm({
  placeholder,
  newsId,
}: TextAreaFormProps) {
  const [isFocus, setIsFocus] = React.useState(false);
  const [content, setContent] = React.useState('');
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  function handleTextAreaFocus() {
    setIsFocus(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = {
      content,
      news: newsId,
    };

    const response = await postComment(data);
    // console.log('Esse é os dados retornados', response.data);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao postar comentario',
        description: response.error,
      });
      return;
    } else {
      toast({
        title: 'Sucesso !!! ',
        description: 'Comentarios  postado com sucesso.',
      });
    }

    setContent('');
    setIsFocus(false);
  }

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = isFocus ? '160px' : '80px';
    }
  }, [isFocus]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <textarea
        value={content}
        ref={textAreaRef}
        onClick={handleTextAreaFocus}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-20 p-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent duration-300"
      />

      <button className="px-4 py-2 bg-sky-900 text-white rounded-lg smallest:text-xl self-end hover:bg-sky-700 duration-300 text-base">
        enviar
      </button>
    </form>
  );
}
