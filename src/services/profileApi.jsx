export const getUserProfile = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
    image:
      "https://i.pravatar.cc/300?img=12",
    followers: 2500,
    following: 180,
    posts: 45,
  };
};