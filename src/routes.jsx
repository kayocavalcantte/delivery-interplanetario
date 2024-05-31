import { BrowserRouter, Route, Routes } from "react-router-dom";
import Address from "./pages/Address/Address";
import Editar from "./pages/Edit/Edit";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Address />}></Route>
                <Route path="/editar" element={<Editar />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;