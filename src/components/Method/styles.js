import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const Badge = styled.div`
  display: inline-block;
  width: fit-content;
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 20px;
`;result

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  text-align: left;
  transition: 0.3s ease;
  border: 1px solid transparent;

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: #cccccc;
  }

  &:hover {
    transform: translateY(-6px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 15px 35px rgba(242, 98, 15, 0.25);
  }
`;
