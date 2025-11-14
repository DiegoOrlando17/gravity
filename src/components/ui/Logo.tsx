import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-transparent.png"
        alt="Gravity Company Logo"
        width={160}
        height={160}
        priority
        className="h-auto w-auto max-h-16 md:max-h-20 object-contain"
      />
    </div>
  );
}