"use client";
import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "success" | "learn_more";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  return (
    <StyledWrapper variant={variant}>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </StyledWrapper>
  );
};

// Helper function to determine background based on variant
const getBackground = (variant: string) => {
  switch (variant) {
    case "secondary":
      return "linear-gradient(90deg, #6c757d, #adb5bd)";
    case "danger":
      return "linear-gradient(90deg, #dc3545, #ff6b6b)";
    case "success":
      return "linear-gradient(90deg, #28a745, #85e89e)";
    case "learn_more":
      return "linear-gradient(90deg, #cc8400, #a66a00)";
    default:
      return "linear-gradient(90deg, #1c1c1c, #6220fb)";
  }
};

const StyledWrapper = styled.div<{ variant: string }>`
  button {
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    clip-path: polygon(
      0 0,
      0 0,
      100% 0,
      100% 0,
      100% calc(100% - 15px),
      calc(100% - 15px) 100%,
      15px 100%,
      0 100%
    );
    height: 40px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: all 0.3s ease;
    background-image: ${({ variant }) => getBackground(variant)};
    border: none;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      padding-right: 30px;
      padding-left: 30px;
    }

    &:disabled {
      background-image: linear-gradient(90deg, #cccccc, #e0e0e0);
      cursor: not-allowed;
      color: #999;
    }
  }
`;

export default Button;
