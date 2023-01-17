type FileCardProps = {
    file: File;
};

function FileCard({ file }: FileCardProps) {
    return (
        <div className="grid place-content-center text-center gap-2">
            <p className="text-blue-400 font-bold text-xl">Selected File:</p>
            {file.name}
        </div>
    );
}

export default FileCard;
