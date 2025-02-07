import Image from "next/image";

export default function DashboardHighlight({
  image,
  alt,
  title,
  text,
  order = 0,
}) {
  return (
    <div className="highlight">
      <Image
        src={image}
        alt={alt}
        width={0}
        height={0}
        style={{ order: order }}
      />
      <div>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
