import styled from "styled-components";

export const Container = styled.footer`
  background: #0f0f0f;
  padding: 80px 20px 40px 20px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  color: white;
`;

export const Top = styled.div`
  display: grid;
  gap: 40px;
  margin-bottom: 50px;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const Brand = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    opacity: 0.7;
    margin-bottom: 20px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 0.9rem;
    opacity: 0.8;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.primary};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 0.9rem;
    opacity: 0.8;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.primary};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

export const Disclaimer = styled.p`
  font-size: 0.75rem;
  opacity: 0.6;
  margin-bottom: 30px;
  line-height: 1.5;
`;

export const Bottom = styled.div`
  font-size: 0.75rem;
  opacity: 0.6;
  text-align: center;
`;
