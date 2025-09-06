import Image from "next/image";
export default function SidebarImage() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center w-40 h-40">
      <Image
        src="/profile-placeholder.jpg"
        alt="Hamdy Emad"
        width={160}
        height={160}
        className="rounded-lg object-cover w-36 h-36"
      />
    </div>
  );
}
