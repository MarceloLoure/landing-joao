import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
`;

export const Content = styled.div`
  max-width: 800px;
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 25px;

  span {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  li {
    margin-bottom: 10px;
  }
`;

export const Highlight = styled.p`
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  padding: 18px 50px;
  font-weight: bold;
  border-radius: 8px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Micro = styled.p`
  margin-top: 20px;
  font-size: 0.85rem;
  opacity: 0.9;
`;
