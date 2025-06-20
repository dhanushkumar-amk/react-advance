import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipeListPage from "../pages/recipeListPage";
import CommentsListpage from "../pages/CommentsListpage";
import NotFound from "../pages/NotFound";
import DynamicRoutes from "../pages/RecipeDetailsPage";
import Layout from "./Layout";

const ReactRouterDOM = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div style={{display : "flex", alignItems : "center", justifyContent : "space-between", marginTop : "30px"}}>
            <Link to={'/recipe-list'} >Receipe List</Link>
            <Link to={'/comment-list'} >comment List</Link>
        </div>

        <button onClick={() => navigate('/recipe-list')} style={{ margin : "30px"}}>Navigate to recipe List Page</button>
        <button onClick={() => navigate('/comment-list')}>Navigate to comment List Page</button>

          <Routes>
            <Route path="/home" element={<Layout/>}>
            <Route path="recipe-list" element={ <RecipeListPage/> } />
            <Route path="comment-list" element={ <CommentsListpage/> } />
            <Route path="recipe-list/:id" element={<DynamicRoutes/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default ReactRouterDOM
