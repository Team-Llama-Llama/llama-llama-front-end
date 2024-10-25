import { useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import ModuleList from "./components/ModuleList/ModuleList";

interface Props {
  userId: number;
}

function App({ userId }: Props) {
  // Add typescript correct typo
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <div className="App">
      <div className="Header">
        <h1>Llama Llama</h1>
      </div>

      {/* Side bar in the left */}
      <div className="CategoryMenu">
        <CategoryList
          userId={userId}
          setActiveCategoryId={setActiveCategoryId}
        />
      </div>

      <div className="ModuleList">
        <ModuleList activeCategoryId={activeCategoryId} />
      </div>
    </div>
  );
}

export default App;
