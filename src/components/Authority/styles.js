import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 20px;
  background: #141414;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

export const Text = styled.div`
  h2 {
    font-size: 2.4rem;
    margin-bottom: 20px;
    color: white;

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.4rem;
      display: block;
      margin-top: 5px;
    }
  }

  p {
    color: #cccccc;
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Highlight = styled.div`
  margin-top: 25px;
  font-weight: bold;
  color: white;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 15px;
`;
