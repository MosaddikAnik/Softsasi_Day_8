import ProfileCard from "../components/ProfileCard";
import useUserProfile from "../hooks/useUserProfile";

const UserProfile = () => {
  const { user, loading } = useUserProfile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-error text-lg">
          Failed to load user
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ProfileCard user={user} />
      </div>
    </section>
  );
};

export default UserProfile;