type FileCardProps = {
    file: File;
};

function FileCard({ file }: FileCardProps) {
    return (
        <div className="grid place-content-center gap-2 text-center">
            <p className="text-xl font-bold text-blue-400">Selected File:</p>
            {file.name}
        </div>
    );
}

export default FileCard;
