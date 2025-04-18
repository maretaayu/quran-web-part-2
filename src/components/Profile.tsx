type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};

function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-left text-sm font-light">{greeting}</p>
        <p className="text-left text-base font-bold md:text-xl">{name}</p>
      </div>
      <img src={avatar} alt="Profile User" className="w-10 h-10" />
    </div>
  );
}

export default Profile;
