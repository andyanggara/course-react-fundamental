import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.albums";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/main.posts";
import NavigationLayouts from "./components/Layouts/navigation.layouts";
import Homes from "./components/Home/main.home";
import { NotFound } from "./components/Layouts/404.layout";

const App = () => {
    return (
        <>
            <MainLayouts>
                <Router>
                    <NavigationLayouts />
                    <Routes>
                        <Route path="/" element={<Homes title="Home" />} />
                        <Route path="albums" element={<Albums title="My Albums" />} />
                        <Route path="posts" element={<Posts title="My Posts" />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </MainLayouts>
        </>
    );
};

export default App;
