import { notFound } from 'next/navigation';
//single profile data
async function getProfile(id: string) {
  const res = await fetch(`http://localhost:3000/api/profiles/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const profile = await getProfile(params.id);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">LOGO</div>
          <div></div>
        </div>
      </nav>

      {/* Header section */}
      <div className="relative h-48 bg-gradient-to-r from-orange-500 to-red-500">
        {/* Profile picture */}
        <div className="absolute inset-0 flex justify-center items-end">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-md absolute -bottom-16"
          />
        </div>

        {/* Contact + Resume+phone*/}
        <div className="absolute bottom-2 left-0 right-0 px-6 flex justify-between items-center">
          {/* Email + Phone */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-white text-sm">
            <a href={`mailto:${profile.email}`} className="hover:underline">
              📧 {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="hover:underline">
              📞 {profile.phone}
            </a>
          </div>

          {/* Download Resume  */}
          <div>
            <a
              href={profile.resumeUrl}
              download
              className="bg-white text-red-500 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition text-sm"
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <main className="container mx-auto px-6 pt-24 text-center">
        <h1 className="text-gray-700 text-2xl font-bold">{profile.name}</h1>
        <p className="text-gray-800 text-sm">{profile.title}</p>
        <p className="text-gray-700 text-sm mt-2">{profile.bio}</p>
      </main>
    </div>
  );
}
