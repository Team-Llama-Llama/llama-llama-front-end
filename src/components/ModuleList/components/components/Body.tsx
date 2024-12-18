import { EditedProperties, Views } from "../Module";

interface Props {
  moduleBody: string;
  currentView: Views;
  handlePropertyChange: (property: EditedProperties, value: string) => void;
}

const Body = ({ moduleBody, currentView, handlePropertyChange }: Props) => {
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handlePropertyChange("body", event.target.value);
  };
  // Controlled components
  return (
    <div className="m-1 bg-slate-500 p-3 mb-3 text-white text-2xl font-extralight h-40 overflow-y-auto rounded-lg">
      {currentView === "editView" ? (
        <>
          <textarea className="w-full h-full rounded-lg bg-white p-1 text-black" value={moduleBody} onChange={(e) => {
            e.preventDefault();
            handleTextChange(e);
          }} />
        </>
      ) : (
        <>
          <p>{moduleBody}</p>
        </>
      )}
    </div>
  );
};

export default Body;
