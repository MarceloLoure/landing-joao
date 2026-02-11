import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 20px;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 50px;
  color: white;
`;

export const Item = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #222;
  padding-bottom: 15px;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Answer = styled.div`
  margin-top: 10px;
  color: #cccccc;
  line-height: 1.6;
`;
