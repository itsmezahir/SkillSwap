import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SkillTag from "../components/skilltag";
import ProfileHeader from "../components/ProfileHeader";

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      {/* Sidebar */}
      <Navbar />

      <div className="bg-white flex-1 flex flex-row">
        {/* Navbar */}
        <Sidebar />

        {/* Content */}
        <div className="bg-white p-10 space-y-10">
          <ProfileHeader />

          {/* Skill I Can Teach */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold flex items-center gap-3">
              Skill I Can Teach
              <img
                src="/pencil.png"
                alt="Edit"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </h3>
            <div className="mt-3">
              <SkillTag text="UI/UX" />
            </div>
          </div>

          {/* Skill I Want to Learn */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold flex items-center gap-3">
              Skill I Want to Learn
              <img
                src="/pencil.png"
                alt="Edit"
                width={20}
                height={20}
                className="cursor-pointer"
              />{" "}
            </h3>
            <div className="mt-3">
              <SkillTag text="Data Analyst" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
