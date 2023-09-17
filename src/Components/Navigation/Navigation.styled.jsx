import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LinkIcon = styled(Link)`
    display: flex;
`

export const LinkHeader = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
        сolor: var(--white);
    }

    &.active {
        font-weight: bold;
        opacity: 1;
    }
`;
