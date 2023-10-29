import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import './css/common.css';
import "./scss/app.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Add from "./pages/Add";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="home" element={<Home />}></Route>
                <Route path="search" element={<Search />}></Route>
                <Route path="add_circle" element={<Add />}></Route>
                <Route path="bookmark" element={<Bookmark />}></Route>
                <Route path="person" element={<Profile />}></Route>
                <Route path="*" element={<NoPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
