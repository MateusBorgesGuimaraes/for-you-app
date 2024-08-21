import deleteComment from '@/actions/delete-comment';
import { useToast } from '../ui/use-toast';
import { useNewsStore } from '@/store/news';

type CommentComponentHeaderButtonDeleteProps = {
  id: string;
};

export default function CommentComponentHeaderButtonDelete({
  id,
}: CommentComponentHeaderButtonDeleteProps) {
  const { toast } = useToast();
  const { deleteCommentFromNews } = useNewsStore();

  async function deleteCommentPage() {
    const response = await deleteComment(id);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao deletar comentario',
        description: response.error,
      });
      return;
    }
    toast({
      title: 'Sucesso !!! ',
      description: 'Comentarios deletado com sucesso',
    });

    deleteCommentFromNews(id);
  }

  return (
    <button
      onClick={deleteCommentPage}
      className="text-sm bg-red-500/50 text-slate-800 font-bold py-1 px-4 rounded hover:bg-red-500/80 duration-300"
    >
      excluir
    </button>
  );
}
