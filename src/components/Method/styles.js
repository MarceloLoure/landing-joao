import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #0f0f0f;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BreakBelief = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 50px;
  line-height: 1.7;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 20px;
  text-align: left;
  margin-bottom: 50px;
`;

export const Item = styled.li`
  background: #232221;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const Highlight = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;
