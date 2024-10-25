import React from "react";
import { useState, useEffect } from "react";
import CategoryMenu from "./components/CategoryMenu";
import ModuleList from "./components/ModuleList";
import { login } from "./utilities/auth";
import { getModules } from "./utilities/Api";
import { CategoryInterface, ModuleInterface } from "./components/dataInterface";

function App() {

  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [modules, setModules] = useState<ModuleInterface[]>([]);

  useEffect(()=> {   
    userLogin() 
  },[]);

  async function userLogin() {
      const categories = await login();
      setCategories(categories.data);
  }

  async function getModulesHandler (categoryId: number) {
      const modules = await getModules(categoryId);
      setModules(modules);
  }
  
  return (

    <div className="App">

      <div className="Header">
        <h1>Llama Llama</h1>
      </div>
    
      <div className="CategoryMenu">
        <CategoryMenu 
          categories={categories}
          getModulesHandler={getModulesHandler}
        />
      </div>

      <div className="ModuleList">
        <ModuleList 
          modules={modules}
        />
      </div>
    
    </div>

  )
}

export default App;