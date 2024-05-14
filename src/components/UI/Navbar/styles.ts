import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";
import { reposivityQuery } from "../../../css/themes/reposivityQuery";

export const NavHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1  ;

  background-color: #ffffff80;
  // box-shadow: ${softexTheme.boxShadow.small};

  a {
    text-decoration: none;
    color: ${softexTheme.textColors.secondary};
    padding-top: 2px;
  }

  ${reposivityQuery.desktop} {
    padding: ${softexTheme.spacing.extraLarge};
    ul {
      display: flex;
      justify-content: space-evenly;
      gap: 70px;
      align-items: center;
      list-style: none;
      font-size: ${softexTheme.fontSizes.extraLarge};
      padding: ${softexTheme.spacing.small};
    }

    li {
      a {
        display: flex;
        img {
          width: 175px;
        }
      }
    }
  }

  ${reposivityQuery.tablet} {
    padding: ${softexTheme.spacing.large};
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }
    li {
      a {
        display: flex;
        img {
          width: 150px;
        }
      }
    }
  }

  ${reposivityQuery.mobile} {
    padding: ${softexTheme.spacing.small};
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      font-size: ${softexTheme.fontSizes.small};
      padding: ${softexTheme.spacing.small};
    }

    li {
      a {
        display: flex;
        img {
          width: 90px;
        }
      }
    }
  }
`;
