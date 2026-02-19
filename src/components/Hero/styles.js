import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
   align-items: flex-end;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
  background: url('/principal-joao-web.png') no-repeat;
  background-size: cover;
  background-position: center 80%;

    @media (max-width: 768px) {
      min-height: 100vh;
      background: url('/principal-joao-mobile.png') no-repeat;
      align-items: flex-end;
       background-size: cover;
      justify-content: center;
    }

    @media (max-width: 425px) {
      min-height: 55vh;
      background: url('/principal-joao-mobile.png') no-repeat;
      align-items: flex-end;
       background-size: cover;
      justify-content: center;
    }

    @media (max-width: 375px) {
      min-height: 45vh;
      background: url('/principal-joao-mobile.png') no-repeat;
      align-items: flex-end;
       background-size: cover;
      justify-content: center;
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

  /* @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0),
      rgba(0,0,0,0.6)
    );
  } */
`;

export const ContentTop = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  
`;

export const Content = styled.div`
  position: relative;
  max-width: 900px;
  text-align: center;
  z-index: 2;
`;

export const ContentBottom = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #111; // fundo sólido para limpar visual
`;


export const Badge = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.secondary};
  -webkit-text-stroke: 10px #ffd700;
  paint-order: stroke fill;
  text-shadow: 0 8px 20px rgba(0,0,0,0.4);

  letter-spacing: 2px;
  display: none;
  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 5px;
    line-height: 1.3;
    
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

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.4;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
      font-size: 1rem;

      span {
        font-size: 1rem;
        line-height: 1;
      }
  }
`;

export const Badges = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.9rem;
  opacity: 0.8;
`;
