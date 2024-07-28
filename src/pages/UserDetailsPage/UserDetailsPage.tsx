import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetch } from 'hooks';

import { Button } from 'components';

import { Movies } from './Movies';

import { Styled } from './UserPageDetails.styles';

function UserDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, state: fetchState } = useFetch<any>(`https://swapi.dev/api/people/${id}/`);

  const backToList = () => {
    navigate('/users/');
  };

  if (['idle', 'loading'].includes(fetchState)) {
    return <>Loading...</>;
  }

  return (
    <>
      <Button onClick={backToList}>Go Back</Button>

      <Styled.Container>
        <Styled.UserDetails>
          <Styled.UserDetailsGrid>
            {Object.keys(data ?? {}).map((key) => {
              const value = data[key];
              if (Array.isArray(value)) {
                return null;
              }

              return (
                <Styled.Item key={key}>
                  <Styled.ItemLabel>{`${key}:`}</Styled.ItemLabel>
                  <Styled.ItemValue>{value}</Styled.ItemValue>
                </Styled.Item>
              );
            })}
          </Styled.UserDetailsGrid>
        </Styled.UserDetails>
        <Movies urls={data.films} />
      </Styled.Container>
    </>
  );
}

export {
  UserDetailsPage,
};
