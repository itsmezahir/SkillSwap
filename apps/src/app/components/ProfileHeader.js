import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-8">
      <div className="relative w-32 h-32">
        <Image
          src="/photo-profile.png"
          alt="Profile"
          fill
          className="rounded-full object-cover"
        />
        <Image
          src="/camera.png"
          alt="Verified"
          width={40}
          height={40}
          className="cursor-pointer absolute bottom-1 right-1 bg-gray-400 p-2 rounded-full shadow"
        />
      </div>

      <div>
        <h2 className="text-gray-900 text-3xl font-semibold flex items-center gap-3">
          Zahir Fakhri Ahmad
          <Image
            src="/pencil.png"
            alt="Verified"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </h2>

        <div className={`${poppins.className} text-gray-900 mt-2 text-sm`}>
          <p>
            <strong>Portfolio</strong>
          </p>
          <p>https://www.zahirfakhri.com/</p>
          <p>
            <strong>Bio</strong>
          </p>
          <p>Be yourself and never surrender</p>
        </div>
      </div>
    </div>
  );
}
