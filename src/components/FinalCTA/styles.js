import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  display: flex;
  justify-content: center;
    width: 100%;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20px;

  span {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 40px;
  font-size: 1.1rem;
`;

export const Button = styled.a`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 18px 40px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  height: 50px;

  &:hover {
    transform: scale(1.05);
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 0.8rem;
    height: 50px;
    width: auto;
  }
`;
