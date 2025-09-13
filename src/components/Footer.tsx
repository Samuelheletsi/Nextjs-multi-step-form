import Link from "next/link";

type FooterProps = {
  left: string;
  right: string;
  goback: string;
  link?: string;
  onRightClick?: () => void;
};

export default function Footer({ left, right, goback, link, onRightClick }: FooterProps) {
  return (
    <div className="flex justify-between p-4 bg-gray-50 mt-4">
      <Link href={goback} className="text-gray-700">{left}</Link>

      {onRightClick ? (
        <button onClick={onRightClick} className="bg-blue-600 text-white px-4 py-2 rounded">
          {right}
        </button>
      ) : (
        <Link href={link || "#"} className="bg-blue-600 text-white px-4 py-2 rounded">
          {right}
        </Link>
      )}
    </div>
  );
}
