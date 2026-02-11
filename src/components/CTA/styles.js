import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease;
  color: white;
  background: ${({ theme }) => theme.gradients.primary};

  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 20px 48px;
      font-size: 1.1rem;
    `}

  ${({ $size }) =>
    $size === "md" &&
    css`
      padding: 16px 36px;
      font-size: 1rem;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 12px 24px;
      font-size: 0.9rem;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(242, 98, 15, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`;
