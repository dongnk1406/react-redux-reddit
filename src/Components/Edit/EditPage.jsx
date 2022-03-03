import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateUSer } from "../../redux/apiRequests";
import { update } from "../../redux/userSlice";
import Input from "../InputFields/Input";

const avatarsUrl = [
  "https://i.redd.it/mozfkrjpoa261.png",
  "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  "https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79",
  "https://i.redd.it/ib7scrg5t7w61.png",
  "https://preview.redd.it/vl1a9jcmrtv51.png?auto=webp&s=9171f7620ac0c4d75eddde2e87a99dafdf16ee57",
  "https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
];

function EditPage(props) {
  const { setEditProfile } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [avatar, setAvatar] = useState(user.avatar);
  const [theme, setTheme] = useState(user.theme);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSetEditProfile = () => {
    setEditProfile(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avatar: avatar,
      theme: theme,
    };
    dispatch(update(updateUser));
    // updateUSer(updateUser, dispatch);
  };

  return (
    <section>
      <div className="flex flex-col">
        <div className="flex justify-between px-6 py-4 md:px-12 md:py-8">
          <button
            className="text-3xl font-thin px-2 text-white md:px-4 py-1 md:text-4xl"
            onClick={() => setEditProfile(false)}
          >
            x
          </button>
          <button
            className=" text-lg bg-blue-500 px-2 font-semibold rounded-md cursor-pointer md:text-2xl md:px-3"
            onClick={handleSetEditProfile}
          >
            Save
          </button>
        </div>

        <div className="px-8 py-4 md:px-20">
          <div>
            <h2 className="text-center text-xl font-semibold ">Edit Profile</h2>
          </div>
          <Input
            id="edit-name"
            label="Display name"
            data={user.name}
            className="form-input"
            setData={setName}
          />

          <Input
            id="edit-age"
            label="Age"
            data={user.age}
            className="form-input"
            setData={setAge}
          />

          <Input
            id="edit-about"
            inputType="textarea"
            rows="5"
            data={user.about}
            label="About"
            className="form-input"
            setData={setAbout}
          />

          <div className="">
            <p>Profile Picture</p>
            <div className="flex justify-evenly flex-wrap mx-2 md:justify-start">
              {avatarsUrl.map((avatar, index) => {
                return (
                  <img
                    src={avatar}
                    key={index}
                    alt=""
                    className={`h-[120px] w-[90px] object-cover overflow-hidden m-2 bg-white rounded-xl
                    cursor-pointer md:w-[130px] md:h-[180px] md:m-3 
                    ${
                      selectedImage === index ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={(e) => {
                      setAvatar(e.target.src);
                      setSelectedImage(index);
                    }}
                  ></img>
                );
              })}
            </div>
          </div>

          <div className="flex py-4">
            <p className="mr-20">Theme</p>
            <input
              value={theme}
              type="color"
              className="rounded-md w-20 cursor-pointer"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditPage;
