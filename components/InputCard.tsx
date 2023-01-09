import { ChangeEventHandler, MouseEventHandler } from "react";

interface InputCardProps {
    handleFileChange: ChangeEventHandler;
    handleSubmitButton: MouseEventHandler;
}

function InputCard(props: InputCardProps) {
    return (
        <div className="inputCard ">
            <input
                type="file"
                name="fileInput"
                id="fileInput"
                onChange={props.handleFileChange}
            />
            <button onClick={props.handleSubmitButton}>Submit</button>
        </div>
    );
}

export default InputCard;
