import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;

    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
      }
    }
  }

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    opacity: ${(props) => props.theme.imageOpacity};
  }

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
      width: unset;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: auto;
      margin-bottom: 15px;
    }

    .price {
      width: max-content;
      text-align: right;
    }
  }
`;
