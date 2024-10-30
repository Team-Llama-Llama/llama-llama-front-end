import { Views, EditedProperties } from "../Module";

interface Props {
  currentView: Views;
  referenceURL: string;
  handlePropertyChange: (property: EditedProperties, value: string) => void;
}

const ReferenceURL = ({
  referenceURL,
  currentView,
  handlePropertyChange,
}: Props) => {

  return (
    <div className="rounded:lg m-5 h-60">
      {currentView === "normalView" ? (
        // <p>{referenceURL}</p>
            <div className="w-full flex justify-center items-center rounded h-60">
                <iframe className="rounded-lg w-full h-full"
                        src={referenceURL}
                        >
                </iframe>
            </div>
      ) : (
        <input
          className="w-full h-full rounded-lg p-2 text-3xl bg-slate-500 text-white text-center"
          type="text"
          value={referenceURL}
          onChange={(e) => {
            handlePropertyChange("referenceUrl", e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default ReferenceURL;
