import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.textColor};

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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem 1rem;
    }
  }
`;
