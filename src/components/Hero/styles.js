import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  /* background-image: url('/principal-joao.png'); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
  background: url('/principal-joao.png') center/cover no-repeat;

    @media (max-width: 768px) {
    background: url('/principal-joao.png') center/cover no-repeat;
    }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(242, 31, 12, 0.15),
    transparent 70%
  );
`;

export const Content = styled.div`
  position: relative;
  max-width: 900px;
  text-align: center;
  z-index: 2;
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

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 20px;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 16px 36px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  transition: 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(242, 98, 15, 0.6);
  }
`;
