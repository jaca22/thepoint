import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { chunk } from 'utils';

import { useFetch } from 'hooks';

import { Table, Button } from 'components';

import { Person } from 'type';

import { Styled } from './UserPage.styles';

function UsersPage() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { data, state: fetchState } = useFetch<{ results: Person[] }>('https://swapi.dev/api/people/');

  const chunks: Person[][] = useMemo(() => {
    const parsedData = data?.results?.map((item, index) => ({
      ...item, id: index + 1,
    }));
    return chunk(parsedData ?? [], 5);
  }, [data?.results]);

  const onItemClickHandler = (index: string) => {
    setActiveItem((state) => (state === index ? null : index));
  };

  const goToDetails = (id: number) => {
    navigate(`/users/${id}`);
  };

  if (['idle', 'loading'].includes(fetchState)) {
    return <>Loading...</>;
  }

  return (
    <Styled.TableContainer>
      {chunks.map((group, chunkIndex) => (
        <Styled.TableContainerItem key={`table-${chunkIndex}`}>
          <Table>
            <Table.THead>
              <Table.Tr>
                <Table.Th>
                  #ID
                </Table.Th>
                <Table.Th resizable>
                  Name
                </Table.Th>
                <Table.Th resizable>
                  Height
                </Table.Th>
                <Table.Th resizable>
                  Skin Color
                </Table.Th>
                <Table.Th>
                  Action
                </Table.Th>
              </Table.Tr>
            </Table.THead>
            <Table.TBody>
              {group.map((person, index) => {
                const itemId = `${chunkIndex}_${index}`;
                const isActive = itemId === activeItem;
                return (
                  <Table.Tr key={itemId}>
                    <Table.Td label="#ID">
                      {person.id}
                    </Table.Td>
                    <Table.Td
                      label="Name"
                      onClick={() => onItemClickHandler(itemId)}
                      style={{
                        cursor: 'pointer',
                        color: isActive ? 'red' : 'black',
                      }}
                    >
                      {person.name}
                    </Table.Td>
                    <Table.Td label="Height">
                      {person.height}
                    </Table.Td>
                    <Table.Td label="Skin Color">
                      {person.skin_color}
                    </Table.Td>
                    <Table.Td label="Action">
                      <Button onClick={() => goToDetails(person.id)}>Details</Button>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.TBody>
          </Table>
        </Styled.TableContainerItem>
      ))}
    </Styled.TableContainer>
  );
}

export {
  UsersPage,
};
