function Modal(props) {
  function onClose() {
    document.querySelector('.modal').classList.remove("is-active");
  }

  return (
    <div className="modal " >
      <div className="modal-background"></div>
      <div className="modal-card" style={{ marginTop: '-25%' }}>
        <header className="modal-card-head">
          <h2 className="modal-card-title">{props.title}</h2>
        </header>
        <div className="modal-card-body">{props.content}</div>
        <button onClick={onClose} className="button is-primary" aria-label="close" style={{ width: '100px' }}>
          close
        </button>
      </div>
    </div>
  );
}
export { Modal };
