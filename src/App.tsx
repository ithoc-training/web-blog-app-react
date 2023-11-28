import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import Dashboard from "./domain/Dashboard";
import ArticleDetails from "./domain/ArticleDetails";

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/article-details/:articleId" element={<ArticleDetails/>}/>
        </Routes>
    );
}

export default App;
