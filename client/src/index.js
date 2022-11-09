import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { RecipeListContextProvider } from './recipeListContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <RecipeListContextProvider>
        <App />
      </RecipeListContextProvider>
  </Router>

);