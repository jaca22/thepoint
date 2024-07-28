import styled from 'styled-components';

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

const SectionTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.40rem;
`;

export const Styled = {
  Movies,
  MoviesList,
  SectionTitle,
};
