const ProfileStats = ({
  followers,
  following,
  posts,
}) => {
  return (
    <div className="stats shadow w-full bg-base-200">

      <div className="stat text-center">
        <div className="stat-title">
          Followers
        </div>

        <div className="stat-value text-primary text-2xl">
          {followers}
        </div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">
          Following
        </div>

        <div className="stat-value text-secondary text-2xl">
          {following}
        </div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">
          Posts
        </div>

        <div className="stat-value text-accent text-2xl">
          {posts}
        </div>
      </div>

    </div>
  );
};

export default ProfileStats;