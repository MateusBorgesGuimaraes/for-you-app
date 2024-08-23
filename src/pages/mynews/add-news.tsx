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
import postNews from '@/actions/post-news';

export default function AddNews() {
  const { user } = useUserStore();
  const { toast } = useToast();

  const methods = useForm<PostNewsType>({
    resolver: zodResolver(postNewsSchema),
  });

  async function postNewNews(data: any) {
    const news = {
      ...data,
      user: user?.id,
    };

    const response = await postNews(news);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro criar noticia',
        description: response.error,
      });
      return;
    } else {
      toast({
        title: 'Sucesso!!!',
        description: 'Notícia criada com sucesso',
      });
    }

    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(postNewNews)}
        className="w-full max-w-[900px] space-y-2 "
      >
        <h1 className="supersmall:text-6xl font-bold text-slate-900 mb-6 text-4xl">
          NOVA NOTICIA
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
            POSTAR
          </ButtonAction>
        </div>
      </form>
    </FormProvider>
  );
}
