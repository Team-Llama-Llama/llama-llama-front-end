import { useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import ModuleList from "./components/ModuleList/ModuleList";
import "./app.css"

interface Props {
  userId: number;
}

function App({ userId }: Props) {
  // Add typescript correct typo
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  return (
    <div className="App">
      <div className="text-center text-4xl m-5">
        <h1>Llama Llama</h1>
      </div>

      <div className="flex items-center justify-center">
        <ModuleList activeCategoryId={activeCategoryId} />
      </div>

      {/* Side bar in the left */}
      <div className="flex items-center justify-start absolute top-20">
        <CategoryList
          userId={userId}
          setActiveCategoryId={setActiveCategoryId}
        />
      </div>

    </div>
  );
}

export default App;
