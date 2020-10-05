import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .preview {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 1rem;
    }
  }
`;
