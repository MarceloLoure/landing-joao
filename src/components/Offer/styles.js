import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  background: linear-gradient(180deg, #0f0f0f 0%, #141414 100%);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Badge = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 40px;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  padding: 0;

  li {
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: #cccccc;
  }
`;

export const Guarantee = styled.p`
  margin-bottom: 40px;
  font-weight: bold;
  color: #ffffff;
`;

export const Button = styled.button`
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(242, 98, 15, 0.4);
  }
`;
