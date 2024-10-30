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
    <div className="rounded:lg m-5">
      {currentView === "normalView" ? (
        // <p>{referenceURL}</p>
            <div className="w-full flex justify-center items-center rounded">
                <iframe className="rounded-lg w-full"
                        src={referenceURL}
                        >
                </iframe>
            </div>
      ) : (
        <input
          className="w-full"
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
