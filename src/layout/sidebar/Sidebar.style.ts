import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export const SidebarStyle = styled.div`
  ${layoutMixins.columnFlexBox("", "")}
  width: 300px;
  min-width: 300px;
  padding-top: 93px;
  min-height: 100vh;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
