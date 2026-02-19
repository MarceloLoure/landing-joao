import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: #1a1a1a;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 60px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
`;

export const Item = styled.div`
  background: #232221;
  padding: 30px 20px;
  border-radius: 12px;
  width: 300px;
  height: 150px;
  transition: 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 120px;
  }
`;

export const Icon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const CTAWrapper = styled.div`
  margin-top: 60px;

  button {
    padding: 16px 36px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px rgba(242, 98, 15, 0.6);
    }
  }
`;
