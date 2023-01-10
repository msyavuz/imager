import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { storage } from "../../lib/firebase";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function ImagePage() {
    const router = useRouter();
    const query = router.query;
    const name = query.name as string;
    const fileRef = ref(storage, name);

    const [fileUrl, setFileUrl] = useState<string>();

    useEffect(() => {
        async function getImageUrl() {
            const url = await getDownloadURL(fileRef);
            return url;
        }
        getImageUrl()
            .then((url) => {
                setFileUrl(url);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col justify-center place-content-center items-center w-7/12 m-auto gap-36">
            {fileUrl ? (
                <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={fileUrl}
                        alt="preview image"
                        className="object-scale-down object-center"
                    />
                    <a
                        href={fileUrl}
                        download={true}
                        className="bg-blue-400 hover:bg-blue-800 rounded px-4 py-2 text-center font-bold text-white w-2/5"
                    >
                        Download
                    </a>
                </>
            ) : (
                <Loader show />
            )}
        </div>
    );
}

export default ImagePage;
