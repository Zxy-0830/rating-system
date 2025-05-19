function Dialog(props) {
    return (
       <dialog open>
        <input type="button" onClick={props.handleClosed} value={'close'}></input>
       </dialog>
    )
}

export default Dialog;