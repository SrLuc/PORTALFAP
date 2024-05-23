import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";

export const StyledCarouselItem = styled.section`
    margin-left: ${softexTheme.spacing.large};
    padding: ${softexTheme.spacing.medium};
  img {
    border-radius: ${softexTheme.borderRadius.large};
    width: 100%;
  }

  h1 {
    a {
      color: ${softexTheme.textColors.secondary};
      text-decoration: none;
      list-style: none;
    }
  }

  p {
    color: ${softexTheme.textColors.secondary};
  }
`;
