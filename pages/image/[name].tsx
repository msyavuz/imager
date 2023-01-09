import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { storage } from "../../lib/firebase";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <div>
            {fileUrl && (
                <div className="relative w-96 h-96 ">
                    <Image
                        src={fileUrl}
                        alt="preview image"
                        className="rounded"
                        fill={true}
                    />
                </div>
            )}
        </div>
    );
}

export default ImagePage;
