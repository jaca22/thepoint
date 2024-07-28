import React from 'react';

import { useFetch } from 'hooks';

import { Movie } from 'type';

import { Styled } from './Movies.styles';

type MoviesProps = {
  urls: string[]
};

function Movies({ urls }: MoviesProps) {
  const { data, state } = useFetch<Movie[]>(urls);

  if (['idle', 'loading'].includes(state)) {
    return <Styled.Movies>Loading...</Styled.Movies>;
  }
  return (
    <Styled.Movies>
      <Styled.SectionTitle>Movies:</Styled.SectionTitle>
      <Styled.MoviesList>
        {data?.map((item, index) => (
          <div key={`movie-${index}`}>{item.title}</div>
        ))}
      </Styled.MoviesList>
    </Styled.Movies>
  );
}

export {
  Movies,
};
