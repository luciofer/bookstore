import { Route, Routes } from "react-router-dom";
import { CreateBooks } from "./pages/CreateBooks"
import { DeleteBooks } from "./pages/DeleteBooks"
import { EditBooks } from "./pages/EditBooks"
import { Home } from "./pages/Home"
import { ShowBooks } from "./pages/ShowBooks"

export function Router() {
    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/books/create" element = {<CreateBooks />} />
            <Route path="/books/details/:id" element = {<ShowBooks />} />
            <Route path="/books/edit/:id" element = {<EditBooks />} />
            <Route path="/books/delete/:id" element = {<DeleteBooks />} />
        </Routes>
    )
}