function AlertButton() {
    function handleClick() {
        alert('Es solo un mensaje de alerta');
    }

    return <button onClick={handleClick}>Boton de alerta</button>;
}
export { AlertButton };