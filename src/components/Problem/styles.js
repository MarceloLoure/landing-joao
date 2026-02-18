import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #141414;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 50px;
  font-size: 1.1rem;
  opacity: 0.8;
`;

export const List = styled.ul`
  list-style: none;
  text-align: left;
  display: grid;
  gap: 18px;
  margin-bottom: 50px;
`;

export const Item = styled.li`
  background: #232221;
  padding: 18px;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const Highlight = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;
