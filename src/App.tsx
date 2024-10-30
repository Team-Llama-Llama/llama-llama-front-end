import { useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import ModuleList from "./components/ModuleList/ModuleList";
import { logout } from "./utilities/auth";
import Player from "./components/MusicPlayer/Player.tsx"
import "./app.css"

interface Props {
  userId: number;
  userName: string;
}

function App({ userId, userName }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(null);
  const [editing, setEditing] = useState(false); // shared state to control editing a module

async function handleLogout() {
  const loggingOut = await logout();
  window.location.reload();
  return loggingOut;
}

  return (
    <div className="bg-cover bg-cyan-600 bg-center h-screen">
      <Player/>
      {/* NAV BAR */}
      <div className="bg-slate-100 fixed w-full top-0 left-0 flex justify-between px-6 py-4 shadow-md z-10">
        {/* MUSIC PLAYER */}

        {/* CENTER LOGO */}
        <div className="flex">
          <img
              className="w-10 h-10 mr-4"
              src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
          </img>
          <div className="text-4xl font-medium">
            <h1>Llama Llama</h1>
          </div>
          <img
              className="w-10 h-10 ml-4"
              src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
          </img>
        </div>
        

        {/* RIGHT ICONS */}
        <div className="flex items-center space-x-4">
          <span className="italic">Welcome, {userName}</span>
          <button 
            className="p-2 border-2 bg-slate-100 hover:bg-slate-300"
            type="button"
            onClick={()=>handleLogout()}
            >Logout</button>
        </div>
      </div>

      <div className="pt-16 h-full w-full flex">

        {/* Side bar in the left */}
        
          <div className="w-72 bg-slate-800 h-full flex-shrink-0 px-4 py-6 border-r-2 overflow-y-auto">
            <CategoryList
              userId={userId}
              setActiveCategoryId={setActiveCategoryId}
              setActiveCategoryName={setActiveCategoryName}
              editing={editing}
            />
          </div>

        {/* List of modules centered */}
          <div className="w-9/12 p-6">
            <ModuleList activeCategoryId={activeCategoryId} setEditing={setEditing} activeCategoryName={activeCategoryName} />
          </div>

          <div className="w-1/12 p-6">
            MUSIC PLAYER HERE
          </div>
      </div>

    </div>
  );
}

export default App;
