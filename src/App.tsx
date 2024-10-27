import { useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import ModuleList from "./components/ModuleList/ModuleList";
import { logout } from "./utilities/auth";
import "./app.css"

interface Props {
  userId: number;
}

function App({ userId }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

async function handleLogout() {
  const loggingOut = await logout();
  window.location.reload();
  return loggingOut;
}

  return (
    <div className="bg-cover bg-center h-screen">
      <img
          className="size-10 absolute right-1/3 top-5"
          src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
      </img>
      <img
          className="size-10 absolute left-1/3 top-5"
          src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
      </img>
      <div className="text-center text-4xl m-5 font-medium">
        <h1>Llama Llama</h1>
      </div>

        
      <div>
        <button 
          className="border-2 p-2 flex items-center absolute top-5 right-10 bg-slate-100 hover:bg-slate-300"
          type="button"
          onClick={()=>handleLogout()}
          >Logout</button>
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
