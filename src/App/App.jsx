import { Route, Routes } from "react-router-dom";
import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";
import Home from "../pages/Home/Home.jsx";
import SharedLayout from "../Components/SharedLayout/SharedLayout.jsx";
import Catalog from "../pages/Catalog/Catalog.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </Container>
    );
}

export default App;
