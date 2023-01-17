import { ChangeEventHandler, MouseEventHandler } from "react";

interface InputCardProps {
    handleFileChange: ChangeEventHandler;
    handleSubmitButton: MouseEventHandler;
}

function InputCard(props: InputCardProps) {
    return (
        <div className="inputCard w-96 h-96 flex flex-col place-content-center items-center gap-16">
            <div className="border border-dashed border-gray-500 relative hover:bg-slate-600 rounded">
                <input
                    type="file"
                    multiple
                    className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                    onChange={props.handleFileChange}
                />
                <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto grid place-content-center">
                    <h4>
                        Drop files anywhere
                        <br />
                        or
                    </h4>
                    <p className="">Select Files</p>
                </div>
            </div>
            <button
                onClick={props.handleSubmitButton}
                className="bg-blue-400 hover:bg-blue-800 rounded px-4 py-2 font-bold text-white w-2/5"
            >
                Submit
            </button>
        </div>
    );
}

export default InputCard;
