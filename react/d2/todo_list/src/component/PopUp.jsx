import "./popstyle.css";

export const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Us</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <label>Email:</label>
          <input type="email" required />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};
