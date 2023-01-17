import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { storage } from "../lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import InputCard from "../components/InputCard";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import FileCard from "../components/FileCard";

export default function Home() {
    const [file, setFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const storageRef = ref(storage, file?.name);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }
    async function handleSubmitButton(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (file) {
            setLoading(true);
            const fileProm = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(fileProm.ref);
            setFileUrl(url);
            router.push(`/image/${fileProm.ref.name}`);
        }
    }

    useEffect(() => {
        setLoading(false);
    }, [fileUrl]);

    return (
        <>
            {loading ? (
                <Loader show />
            ) : (
                <>
                    {file && <FileCard file={file} />}
                    <InputCard
                        handleFileChange={handleFileChange}
                        handleSubmitButton={handleSubmitButton}
                    />
                </>
            )}
        </>
    );
}
