import { Container, ListItem, ListContainer, ListItemButton } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <nav>
        <ListContainer>
          <ListItem>
            <ListItemButton isSelected>Dashboard</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>List</ListItemButton>
          </ListItem>
        </ListContainer>
      </nav>
    </Container>
  );
};
