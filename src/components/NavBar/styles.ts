import styled from "styled-components";

type ListItemProps = {
  isSelected?: boolean;
};

export const Container = styled.div`
  height: 100%;
  width: 243px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-top: 15px;
  padding-left: 11px;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ListItem = styled.li<ListItemProps>`
  list-style: none;
`;

export const ListItemButton = styled.button<ListItemProps>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.BLUE : theme.COLORS.GRAY_700};
  border: 0;
`;
