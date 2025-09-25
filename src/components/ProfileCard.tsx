import Link from 'next/link';

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Link href={`/profiles/${profile.id}`}>
      <div className="rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
        {/* double color*/}
        <div className="bg-orange-500 h-24 rounded-t-lg flex items-center justify-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-white object-cover -mb-12"
          />
        </div>

        {/* card Info */}
        <div className="bg-white pt-16 pb-6 px-4 rounded-b-lg flex flex-col items-center">
          <h2 className="text-gray-900 text-lg font-semibold">{profile.name}</h2>
          <p className="text-gray-800 text-sm">{profile.title}</p>
          <p className="text-gray-800 text-xs mt-1 text-center">{profile.bio}</p>
        </div>
      </div>
    </Link>
  );
}
