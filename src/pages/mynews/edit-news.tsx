'use client';

import ButtonAction from '@/components/buttonAction/button-action';
import InputForm from '@/components/inputForm/input-form';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorComponent from '@/components/errorComponent/error-component';
import { useToast } from '@/components/ui/use-toast';
import { useUserStore } from '@/store/user';
import { postNewsSchema, PostNewsType } from '@/zodSchemas/post-news-redator';
import RedatorSelect from '@/components/formsComponentsRedator/redator-select';
import RedatorCheckbox from '@/components/formsComponentsRedator/redator-checkbox';
import RedatotTextArea from '@/components/formsComponentsRedator/redator-textarea';
import React from 'react';
import getNews from '@/actions/get-news';
import { News } from '@/tipos';
import putNews from '@/actions/put-news';

type EditNewsProps = {
  id: string;
};

export default function EditNews({ id }: EditNewsProps) {
  const [news, setNews] = React.useState<News | null>(null);
  const { user } = useUserStore();
  const { toast } = useToast();

  React.useEffect(() => {
    async function loadNews() {
      const response = await getNews(id);
      if (!response.ok) {
        console.log('erro ao encontras as noticias do redator');
        return;
      }
      setNews(response.data);
    }
    loadNews();
  }, [id]);

  const methods = useForm<PostNewsType>({
    resolver: zodResolver(postNewsSchema),
  });

  React.useEffect(() => {
    if (news) {
      methods.reset({
        title: news.title,
        description: news.description,
        content: news.content,
        author: news.author,
        image: news.image,
        category: news.category,
        exclusive: news.exclusive,
      });
    }
  }, [news, methods]);

  async function updateNews(data: PostNewsType) {
    if (!user?.id) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Usuário não autenticado',
      });
      return;
    }

    const updatedNews = {
      ...data,
      user: user.id,
      id: id,
    };

    const response = await putNews(updatedNews);

    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'Oh não! Erro ao atualizar notícia',
        description: response.error,
      });
      return;
    } else {
      toast({
        title: 'Sucesso!!!',
        description: 'Notícia atualizada com sucesso',
      });
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(updateNews)}
        className="w-full max-w-[900px] space-y-2 "
      >
        <h1 className="supersmall:text-6xl font-bold text-slate-900 mb-6 text-4xl">
          EDITAR NOTICIA
        </h1>
        <InputForm label="titulo" type="text" name="title" />
        {methods.formState.errors.title && (
          <ErrorComponent message={methods.formState.errors.title.message} />
        )}
        <InputForm label="descrição" type="text" name="description" />
        {methods.formState.errors.description && (
          <ErrorComponent
            message={methods.formState.errors.description.message}
          />
        )}
        <div className="flex gap-4 lg:flex-nowrap flex-wrap">
          <InputForm label="autor" type="text" name="author" />
          {methods.formState.errors.author && (
            <ErrorComponent message={methods.formState.errors.author.message} />
          )}

          <InputForm label="imagem url" type="text" name="image" />
          {methods.formState.errors.image && (
            <ErrorComponent message={methods.formState.errors.image.message} />
          )}
        </div>

        <RedatorSelect label="categoria" name="category" />
        {methods.formState.errors.category && (
          <ErrorComponent message={methods.formState.errors.category.message} />
        )}

        <RedatotTextArea label="conteudo" name="content" />
        <RedatorCheckbox label="Exclusiva" name="exclusive" />
        {methods.formState.errors.exclusive && (
          <ErrorComponent
            message={methods.formState.errors.exclusive.message}
          />
        )}

        <div className="py-3">
          <ButtonAction state={methods.formState.isSubmitting}>
            SALVAR
          </ButtonAction>
        </div>
      </form>
    </FormProvider>
  );
}
