import CloseIcon from "@mui/icons-material/Close";
const Popup = (props: any) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div
          className="close-button"
          onClick={() => {
            props.setPopup(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Popup;
