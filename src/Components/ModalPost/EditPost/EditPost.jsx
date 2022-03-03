import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { BsFileImageFill } from "react-icons/bs";
import Input from "../../InputFields/Input";
import "./EditPost.css";
import { editPost } from "../../../redux/postSlice";

const tags = ["NSFW", "Mood", "None", "Quotes", "Sad"];

function EditPost(props) {
  const { dataEditPost, setOpenModalEdit } = props;
  const dispatch = useDispatch();
  const [titlePostEdit, setTitlePostEdit] = useState(dataEditPost.title);
  const [descriptionPostEdit, setDescriptionPostEdit] = useState(
    dataEditPost.description
  );
  const [selectedTagPostEdit, setSelectedTagPostEdit] = useState(
    dataEditPost.tag
  );
  const [imagePostEdit, setImagePostEdit] = useState(dataEditPost.image);

  const handlePreviewImage = (e) => {
    const image = e.target.files[0];
    // image is object, so set property preview cho object
    image.preview = URL.createObjectURL(image);
    setImagePostEdit(image);
    // e.target.value = null;
  };

  const handleEditPost = () => {
    setOpenModalEdit(false);
    const postEdited = {
      id: dataEditPost.id,
      title: titlePostEdit,
      description: descriptionPostEdit,
      tag: selectedTagPostEdit,
      image: imagePostEdit.preview || dataEditPost.image,
    };
    dispatch(editPost(postEdited));
  };

  return (
    <section className="fixed left-0 right-0 bg-[#1f1d1f] lg:mb-8 lg:pb-4 lg:w-[70%] lg:mx-auto">
      <div className="flex flex-col md:text-2xl px-8 h-screen lg:h-auto">
        <div className="flex justify-between mb-8">
          <button
            className="text-3xl font-thin px-2 mt-4 text-white md:px-4 py-1 md:text-4xl"
            onClick={() => setOpenModalEdit(false)}
          >
            x
          </button>
          <button
            className="self-end text-xl mt-6 py-1 bg-blue-500 rounded-md px-2 font-semibold cursor-pointer md:text-3xl"
            onClick={handleEditPost}
          >
            Save
          </button>
        </div>
        <div className="">
          <div>
            <Input
              id="add-title"
              value={titlePostEdit}
              label="Title"
              inputType="textarea"
              className="form-input"
              setData={setTitlePostEdit}
            />

            <Input
              id="add-description"
              value={descriptionPostEdit}
              inputType="textarea"
              cols="30"
              rows="4"
              label="Description"
              className="form-input"
              setData={setDescriptionPostEdit}
            />

            <div className="">
              <div className="flex py-2">
                <label htmlFor="image-input">
                  <BsFileImageFill className="text-3xl text-green-500 hover:cursor-pointer" />
                </label>
                <p className="ml-4">Image/Video</p>
              </div>
              <input
                id="image-input"
                type="file"
                className="hidden"
                onChange={handlePreviewImage}
              />
              {imagePostEdit && (
                <div className="bg-black">
                  <img
                    src={imagePostEdit.preview || imagePostEdit}
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
                        setSelectedTagPostEdit(index);
                      }}
                      className={`makepost-tags-${tag}
                      ${
                        selectedTagPostEdit === index
                          ? "border-2 border-white"
                          : ""
                      }
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

export default EditPost;
