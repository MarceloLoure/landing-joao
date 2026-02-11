import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 70px;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 50px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s ease;
  border: 1px solid transparent;

  img {
    width: 100%;
    display: block;
  }

  &:hover {
    transform: translateY(-10px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 25px 50px rgba(242, 98, 15, 0.25);
  }
`;
