import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 90%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.textColor};

  @media screen and (max-width: 800px) {
    height: 70vh;
    justify-content: center;
    margin-right: unset;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;
