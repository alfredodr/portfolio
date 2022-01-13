import Image from "next/image";

const CoverImage = ({ data }) => {
  const { img } = data;
  return <Image src={img} alt="Project Image"></Image>;
};

export default CoverImage;
