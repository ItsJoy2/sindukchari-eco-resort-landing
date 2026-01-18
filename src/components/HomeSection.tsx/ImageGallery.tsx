import { Images } from "@/store/images";
import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="md:pt-12">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {[
          Images.gallery1,
          Images.gallery2,
          Images.gallery3,
          Images.gallery4,
          Images.gallery5,
        ].map((item, idx) => (
          <Image className="md:h-89.25 h-40" key={idx} src={item} alt="img" width={500} height={500} />
        ))}
      </div>
    </section>
  );
}
