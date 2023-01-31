import { ChangeEventHandler, MouseEventHandler } from "react";

interface InputCardProps {
    handleFileChange: ChangeEventHandler;
    handleSubmitButton: MouseEventHandler;
}

function InputCard(props: InputCardProps) {
    return (
        <div className="inputCard flex h-96 w-96 flex-col place-content-center items-center gap-16">
            <div className="relative rounded border border-dashed border-gray-500 hover:bg-slate-600">
                <input
                    type="file"
                    multiple
                    className="relative z-50 block h-full w-full cursor-pointer p-20 opacity-0"
                    onChange={props.handleFileChange}
                />
                <div className="absolute top-0 right-0 left-0 m-auto grid place-content-center p-10 text-center">
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
                className="w-2/5 rounded bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-800"
            >
                Submit
            </button>
        </div>
    );
}

export default InputCard;
