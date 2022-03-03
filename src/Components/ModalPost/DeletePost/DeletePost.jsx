import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postSlice";

function DeletePost(props) {
  const dispatch = useDispatch();
  const { setOpenModalDelete, postId } = props;

  return (
    <section
      className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] flex justify-center items-center"
      onClick={() => setOpenModalDelete(false)}
    >
      <div className="bg-slate-50 rounded-md">
        <div className="py-8">
          <p className="text-center text-xl  text-[#3d3c3c] font-semibold px-2 ">
            Do you really want to delete?
          </p>
        </div>

        <div className="flex justify-around w-full border-t border-slate-300 mt-4">
          <button
            className="text-slate-400 hover:opacity-80 w-full border-r border-slate-300 py-2"
            onClick={() => setOpenModalDelete(false)}
          >
            CANCEL
          </button>
          <button
            className="text-red-500 font-semibold hover:opacity-80 w-full"
            onClick={() => {
              dispatch(deletePost(postId));
              setOpenModalDelete(false);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeletePost;
