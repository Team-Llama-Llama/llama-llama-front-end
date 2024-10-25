import { useState, useEffect } from "react";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import ModuleList from "./components/ModuleList";
import { getModules } from "./utilities/Api";
import { CategoryInterface, ModuleInterface } from "./components/dataInterface";

interface Props {
  userId: number;
}

function App({ userId }: Props) {
  // Add typescript correct typo
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  return (
    <div className="App">
      <div className="Header">
        <h1>Llama Llama</h1>
      </div>

      {/* Side bar in the left */}
      <div className="CategoryMenu">
        <CategoryMenu
          userId={userId}
          setActiveCategoryId={setActiveCategoryId}
        />
      </div>

      <div className="ModuleList">
        <ModuleList userId={userId} activeCategoryId={activeCategoryId} />
      </div>
    </div>
  );
}

export default App;
