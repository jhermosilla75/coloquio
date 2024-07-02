function Modal(props) {
  function onClose() {
    document.querySelector('.modal').classList.remove("is-active");
  }

  return (
    <div className="modal" >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h2 className="modal-card-title">{props.title}</h2>
        </header>
        <div className="modal-card-body">{props.content}</div>
        <button onClick={onClose} className="delete" aria-label="close">
          close
        </button>
      </div>
    </div>
  );
}
export { Modal };
