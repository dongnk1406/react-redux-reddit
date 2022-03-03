import { useSelector } from "react-redux";

const initialUser = {
  name: "Dong NK",
  age: 22,
  about: "I'm a front-end developer",
  avatar:
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  theme: "#ff9051",
};

function Header(props) {
  const { setEditProfile } = props;
  // get user from redux store
  // const user = useSelector((state) => state.user);

  // get user from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user")) || initialUser;

  const handleEdit = () => {
    setEditProfile(true);
  };

  return (
    <div>
      <header
        className="flex flex-col justify-center"
        style={{
          backgroundColor: `${user.theme}`,
          backgroundImage: `linear-gradient(180deg,${user.theme} 2%, ${user.theme}, 65%, #181818 100%)`,
        }}
      >
        <div className=" flex flex-col text-left pl-8 pr-4 text-white md:pr-8">
          <div
            className="cursor-pointer md:text-2xl self-end border-2 border-white p-1 rounded-xl font-bold mt-8 md:p-2"
            onClick={handleEdit}
          >
            Edit
          </div>
          <img
            className=" w-[85px] h-[130px] object-cover rounded-md overflow-hidden md:w-[130px] md:h-[180px]"
            src={user.avatar}
            alt=""
          />
          <p className=" w-1/2 font-bold mb-2 text-xl md:text-2xl">
            {user.name}
          </p>
          <p className=" text-sm mb-2 md:text-base">{user.age} years old</p>
          <p className=" mb-4 md:text-xl">{user.about}</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
