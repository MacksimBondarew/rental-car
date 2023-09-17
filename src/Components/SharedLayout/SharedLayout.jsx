import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header } from "./SharedLayout.styled";

export default function SharedLayout() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <Outlet />
        </>
    );
}
