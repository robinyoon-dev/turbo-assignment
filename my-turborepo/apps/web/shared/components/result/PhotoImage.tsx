import Image from "next/image";
import { Photo } from "../../types/photo";

const PhotoImage = ({ photo }: { photo: Photo }) => {
  return (
    <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px]">
      <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-black shadow-md md:aspect-video md:rounded-3xl lg:aspect-[4/3]">
        <Image
          src={`${photo.download_url}`}
          alt={`Photo by ${photo.author}`}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default PhotoImage;
