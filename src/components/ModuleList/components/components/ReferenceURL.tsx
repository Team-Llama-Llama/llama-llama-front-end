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
    <div className="border-2">
      {currentView === "normalView" ? (
        // <p>{referenceURL}</p>
        <div>
            <div>
                <iframe width="560"
                        height="200"
                        src={referenceURL}
                        >
                </iframe>
            </div>
        </div>
      ) : (
        <input
          className="w-full"
          type="text"
          value={referenceURL}
          onChange={(e) => {
            //PRESTON may need to change from referenceURL -> reference_url (have not edited yet)
            handlePropertyChange("referenceUrl", e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default ReferenceURL;
