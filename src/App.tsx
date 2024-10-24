import React from "react";
import { useState, useEffect } from "react";
import CategoryMenu from "./components/CategoryMenu";
import CreateModule from "./components/CreateModule";
import ModuleList from "./components/Module";
import { getCategories, getModules } from "./utilities/Api";
import { Category, Module } from "./components/dataInterface";

function App() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(()=> {   
    login() 
  },[]);

  async function login() {
      const categories = await getCategories();
      setCategories(categories);
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
      <div className="CreateModule">
        <CreateModule />
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