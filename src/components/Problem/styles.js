import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  background: #1a1a1a;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 900px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 15px;
  font-size: 1.1rem;
  color: #dddddd;
`;

export const Item = styled(motion.li)`
  background: #232221;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    border-image: linear-gradient(
      90deg,
      #F21F0C,
      #F2780C
    ) 1;
    box-shadow: 0 10px 25px rgba(242, 98, 15, 0.3);
  }
`;

