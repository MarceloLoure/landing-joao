import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #141414;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 60px;
  opacity: 0.8;
`;

export const Grid = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background: #232221;
  padding: 30px;
  border-radius: 15px;
  text-align: left;
  border: 1px solid transparent;
  transition: 0.3s ease;

  h3 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    opacity: 0.85;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-8px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 20px 40px rgba(242, 98, 15, 0.2);
  }
`;

export const SoftCTA = styled.button`
    margin-top: 40px;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.accent}
    );
    border: none;
    padding: 18px 35px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    color: white;
    min-width: 350px;
    text-decoration: uppercase;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 35px rgba(242, 98, 15, 0.4);
    }
`;
