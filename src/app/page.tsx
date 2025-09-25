import ProfileCard from '@/components/ProfileCard';
// Fetch data from  API route
async function getProfiles() {
  const res = await fetch('http://localhost:3000/api/profiles');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function HomePage() {
  const profiles = await getProfiles();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo  */}
          <div className="text-xl font-bold text-gray-800">
            LOGO
          </div>

          {/* Right side of navbar */}
          <div></div>
        </div>
      </nav>

      {/* Main Content*/}
      <main className="container mx-auto p-6 pt-24">
        <h2 className="text-gray-800 text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile: any) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </main>
    </div>
  );
}
