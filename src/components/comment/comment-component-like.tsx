'use client';

import putCommentLikes from '@/actions/put-comment-like';
import { useUserStore } from '@/store/user';
import Image from 'next/image';
import { useToast } from '../ui/use-toast';
import { useNewsStore } from '@/store/news';
import React from 'react';

type CommentComponentLikeProps = {
  likesComment: string[];
  commentId: string;
};

export default function CommenComponentLike({
  likesComment,
  commentId,
}: CommentComponentLikeProps) {
  const { user } = useUserStore();
  const { news, setNews } = useNewsStore();
  const [isLike, setIsLike] = React.useState(false);

  const { toast } = useToast();

  async function toggleLike() {
    if (!user) return;
    const response = await putCommentLikes(commentId);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não !!!',
        description: response.error,
      });
      return;
    }
    if (news && response.ok) {
      setNews({
        ...news,
        comments: news.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              likes: response.data,
            };
          }
          return comment;
        }),
      });
    }

    setIsLike(!isLike);
  }

  React.useEffect(() => {
    if (likesComment.length === 0) return;
    if (user && user.id && likesComment.includes(user.id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [likesComment, user]);

  return (
    <button onClick={toggleLike} className="flex gap-2 items-center self-end">
      {isLike ? (
        <>
          <Image
            src={'/assets/icons/color-like-icon-full.svg'}
            width={24}
            height={24}
            alt="icone de like"
          />
        </>
      ) : (
        <>
          <Image
            src={'/assets/icons/color-like-icon.svg'}
            width={24}
            height={24}
            alt="icone de like"
          />
        </>
      )}
      <p className="text-slate-600 font-bold text-xl">{likesComment.length}</p>
    </button>
  );
}
