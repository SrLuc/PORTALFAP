import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";


interface ContainerProps {
  children: React.ReactNode;
}

export const StyledContainer = styled.div`
  padding: 0 ${softexTheme.spacing.large};
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
