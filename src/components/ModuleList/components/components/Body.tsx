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
    <div className="border-2 m-1">
      {currentView === "editView" ? (
        <>
          <textarea className="w-full" value={moduleBody} onChange={(e) => {
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
