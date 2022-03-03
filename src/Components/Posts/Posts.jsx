import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const tags = ["NSFW", "Mood", "None", "Quotes", "Sad"];

function Posts(props) {
  // get posts from redux store
  const posts = useSelector((state) => state.post.posts);

  const { setOpenModalDelete, setOpenModalEdit, setPostId, setDataEditPost } =
    props;
  const [showOptionId, setShowOptionId] = useState();
  const [isShowOption, setShowOption] = useState(false);

  const handleDataEdit = (post) => {
    setPostId(post.id);
    setShowOption(false);
    setOpenModalEdit(true);
    setDataEditPost({
      id: post.id,
      title: post.title,
      description: post.description,
      tag: post.tag,
      image: post.image,
    });
  };

  return (
    <section>
      <div className="flex flex-col mb-10 lg:mb-6">
        {posts.slice(1).map((post) => {
          return (
            <div key={post.id} className="bg-[#313131] px-8 py-2 mb-2 relative">
              <h2 className="font-semibold text-xl">{post.title}</h2>
              <p
                className={`makepost-tags-${tags[post.tag]} 
                inline-block transition-all delay-100 py-1 px-2 my-2 rounded-md`}
              >
                {tags[post.tag]}
              </p>
              <p className="text-[#ccc]">{post.description}</p>

              <div className="bg-black mt-2">
                {post.image !== "" ? (
                  <img
                    src={post.image}
                    alt=""
                    className="max-h-[250px] w-full object-contain overflow-hidden md:max-h-[450px]"
                  />
                ) : (
                  ""
                )}
              </div>

              <button
                className="absolute right-1 top-1 p-2 md:mr-4"
                onClick={() => {
                  setShowOptionId(post.id);
                  setShowOption(!isShowOption);
                }}
              >
                <BsThreeDotsVertical className="text-2xl hover:cursor-pointer"></BsThreeDotsVertical>
              </button>
              {showOptionId === post.id && isShowOption && (
                <div className="absolute flex flex-col right-5 top-10 bg-slate-300 rounded-md px-2 py-1 text-[#383636]">
                  <button
                    className="border-b border-gray-400 py-1 text-blue-600 hover:opacity-80"
                    onClick={() => {
                      handleDataEdit(post);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="py-1 text-red-500 hover:opacity-80"
                    onClick={() => {
                      setPostId(post.id);
                      setShowOption(false);
                      setOpenModalDelete(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Posts;
