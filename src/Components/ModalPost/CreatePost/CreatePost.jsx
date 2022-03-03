import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { BsFileImageFill } from "react-icons/bs";
import Input from "../../InputFields/Input";
import { createPost } from "../../../redux/postSlice";
import "./CreatePost.css";

const tags = ["NSFW", "Mood", "None", "Quotes", "Sad"];

function CreatePost(props) {
  const { setOpenCreatePost } = props;
  const dispatch = useDispatch();
  const [titlePost, setTitlePost] = useState("");
  const [descriptionPost, setDescriptionPost] = useState("");
  const [selectedTag, setSelectedTag] = useState(0);
  const [imagePost, setImagePost] = useState("");

  // useEffect(() => {
  //   return () => {
  //     if (imagePost) {
  //       URL.revokeObjectURL(imagePost.preview);
  //     }
  //   };
  // }, [imagePost]);

  const handlePreviewImage = (e) => {
    const image = e.target.files[0];
    // image is object, so set property preview cho object
    image.preview = URL.createObjectURL(image);

    setImagePost(image);
    // e.target.value = null;
  };

  const handlePost = () => {
    setOpenCreatePost(false);
    const newPost = {
      id: uuidv4(),
      title: titlePost,
      description: descriptionPost,
      tag: selectedTag,
      image: imagePost.preview || "",
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className=" rounded-t-xl bg-[#1f1d1f] h-[100vh] lg:mb-8 lg:pb-4 lg:h-auto">
      <div className="flex flex-col md:text-2xl ">
        <button
          className="self-end text-xl pt-4 pr-4 font-semibold cursor-pointer md:text-3xl md:pt-6 md:pr-8"
          onClick={handlePost}
        >
          Post
        </button>
        <div className="px-8">
          <div>
            <Input
              id="add-title"
              data={titlePost}
              label="Title"
              inputType="textarea"
              className="form-input"
              setData={setTitlePost}
            />

            <Input
              id="add-description"
              data={descriptionPost}
              inputType="textarea"
              cols="30"
              rows="4"
              label="Description"
              className="form-input"
              setData={setDescriptionPost}
            />

            <div className="">
              <div className="flex py-2">
                <label htmlFor="image-input">
                  <BsFileImageFill className="text-3xl text-green-500" />
                </label>
                <p className="ml-4">Image/Video</p>
              </div>
              <input
                id="image-input"
                type="file"
                className="hidden"
                onChange={handlePreviewImage}
              />
              {imagePost && (
                <div className="bg-black">
                  <img
                    src={imagePost.preview}
                    className="max-h-[250px] w-full mt-1 object-contain overflow-hidden md:max-h-[450px]"
                    alt=""
                  ></img>
                </div>
              )}
            </div>

            <div className="pt-4">
              <label htmlFor="">Tags</label>
              <div className="mt-2">
                {tags.map((tag, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedTag(index);
                      }}
                      className={`makepost-tags-${tag} 
                      ${selectedTag === index ? "border-2 border-white" : ""} 
                      transition-all delay-100 py-1 px-2 m-1 rounded-md`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePost;
