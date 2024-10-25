import { Views, EditedProperties } from "./Module";

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
    <>
      {currentView === "normalView" ? (
        <p>{referenceURL}</p>
      ) : (
        <input
          type="text"
          value={referenceURL}
          onChange={(e) => {
            handlePropertyChange("referenceUrl", e.target.value);
          }}
        />
      )}
    </>
  );
};

export default ReferenceURL;
