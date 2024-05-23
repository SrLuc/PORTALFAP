import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";

interface ContainerProps {
  children: React.ReactNode;
  row?: string;
  wrap?: string;
  justify?: string;
  align?: string;
}

export const StyledContainer = styled.div`
  padding: ${softexTheme.spacing.large};
`;

const Container = ({ children, row, wrap, justify, align }: ContainerProps) => {
  return (
    <StyledContainer
      style={{
        display: "flex",
        flexDirection: row ? "row" : "column",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: justify || "",
        alignItems: align || "",
      }}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
