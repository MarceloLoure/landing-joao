import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #141414;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 60px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.div`
  background: #232221;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Question = styled.button`
  width: 100%;
  padding: 20px;
  background: transparent;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Answer = styled.div`
  padding: 0 20px 20px 20px;
  line-height: 1.6;
  opacity: 0.9;
`;
