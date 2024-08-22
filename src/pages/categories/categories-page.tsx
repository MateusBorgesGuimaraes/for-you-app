'use client';

import getNewsByCategories from '@/actions/get-news-by-categories';
import isValidCategory from '@/functions/valid-category';
import { Categories, News } from '@/tipos';
import React from 'react';
import NewsSequence from '../main/news-sequence';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type CaregoryParams = {
  category: string;
};

export default function CategoriesPage({ category }: CaregoryParams) {
  const [news, setNews] = React.useState<News[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    async function loadNews() {
      if (isValidCategory(category)) {
        const response = await getNewsByCategories({
          categories: category as Categories,
          page,
        });
        if (response.ok) {
          setNews(response.data.news);
          setTotalPages(response.data.totalPages);
        } else {
          console.error(response.error);
        }
      }
    }
    loadNews();
  }, [category, page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (error) return <div>{error}</div>;
  if (!news) return <div>Erro ao carregar noticias</div>;
  return (
    <div>
      <NewsSequence news={news} title={category.toUpperCase()} />
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={page === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext onClick={() => handlePageChange(page + 1)} />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
