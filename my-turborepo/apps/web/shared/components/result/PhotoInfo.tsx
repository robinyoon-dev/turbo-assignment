import { Photo } from "../../types/photo";

const PhotoInfo = ({ photo }: { photo: Photo }) => {
    return (
        <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px] flex flex-col gap-4">
            {/* ID and Author Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-semibold text-black md:text-base">
                            id
                        </div>
                        <div className="text-base text-gray-500 font-normal md:text-lg">
                            {photo.id}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-semibold text-black md:text-base">
                            author
                        </div>
                        <div className="text-base text-gray-500 font-normal md:text-lg">
                            {photo.author}
                        </div>
                    </div>
                </div>
            </div>

            {/* Width and Height Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-semibold text-black md:text-base">
                            width
                        </div>
                        <div className="text-base text-gray-500 font-normal md:text-lg">
                            {photo.width.toLocaleString()}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-semibold text-black md:text-base">
                            height
                        </div>
                        <div className="text-base text-gray-500 font-normal md:text-lg">
                            {photo.height.toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>

            {/* URLs Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 mb-4">
                        <div className="text-sm font-semibold text-black md:text-base">
                            url
                        </div>
                        <a
                            href={photo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 break-all underline font-normal hover:text-zinc-900 md:text-base"
                        >
                            {photo.url}
                        </a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-sm font-semibold text-black md:text-base">
                            download_url
                        </div>
                        <a
                            href={photo.download_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 break-all underline font-normal hover:text-zinc-900 md:text-base"
                        >
                            {photo.download_url}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoInfo;