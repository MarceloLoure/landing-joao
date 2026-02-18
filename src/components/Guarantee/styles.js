import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  background: #1c1c1c;
`;

export const Content = styled.div`
  max-width: 800px;
  text-align: center;
  background: #232221;
  padding: 60px 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Badge = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 25px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  margin-bottom: 15px;
  opacity: 0.9;
  line-height: 1.6;
`;

export const Highlight = styled.p`
  margin-top: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
`;
