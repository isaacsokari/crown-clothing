import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 380px;
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.textColor};

  @media screen and (max-width: 800px) {
    margin-top: 3rem;
    height: 90vh;
    justify-content: center;
    margin-left: unset;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
