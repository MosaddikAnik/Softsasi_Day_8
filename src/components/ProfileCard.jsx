import ProfileStats from "./ProfileStats";

const ProfileCard = ({ user }) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-2xl">
      <div className="card-body items-center text-center">
        
        {/* Avatar */}
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100">
            <img
              src={user?.image}
              alt={user?.name || "Profile"}
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="mt-4 text-3xl font-bold">
          {user?.name}
        </h2>

        <p className="font-medium text-primary">
          @{user?.username}
        </p>

        <p className="text-sm text-base-content/70">
          {user?.email}
        </p>

        <p className="text-sm text-base-content/50">
          {user?.website}
        </p>

        {/* Divider */}
        <div className="divider">
          Profile Stats
        </div>

        {/* Stats */}
        <ProfileStats
          followers={user?.followers}
          following={user?.following}
          posts={user?.posts}
        />

        {/* Button */}
        <button className="btn btn-primary mt-6 w-full">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;