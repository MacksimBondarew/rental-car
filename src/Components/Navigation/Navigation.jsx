import { headerIcon } from "../../images/icons";
import { LinkHeader, LinkIcon, Nav } from "./Navigation.styled";

export default function Navigation() {
    return (
        <Nav>
            <LinkIcon to='/'>{headerIcon}</LinkIcon>
            <LinkHeader to="/">Home</LinkHeader>
            <LinkHeader to="/catalog">Catalog</LinkHeader>
            <LinkHeader to="/favorites">Favorites</LinkHeader>
        </Nav>
    );
}
