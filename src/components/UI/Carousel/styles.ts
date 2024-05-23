import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";
import {reposivityQuery} from "../../../css/themes/reposivityQuery"

export const StyledCarouselItem = styled.section`
    margin-left: ${softexTheme.spacing.large};
    padding: ${softexTheme.spacing.medium};

  img {
    border-radius: ${softexTheme.borderRadius.large};
    width: 100%;
    height: 250px;

    ${reposivityQuery.tablet} {
      height: 200px;
      width: 250px;
    }

    ${reposivityQuery.mobile} {
      height: 200px;
      width: 230px;
    }
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
