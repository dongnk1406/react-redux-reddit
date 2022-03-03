function Footer(props) {
  const { isOpenCreatePost, setOpenCreatePost } = props;

  return (
    <footer className="fixed bottom-0 w-full bg-[#2c2c2c] lg:w-[70%]">
      <div className="flex justify-center items-center py-1">
        <button
          className="text-4xl px-4 font-thin md:font-normal lg:text-xl"
          onClick={(e) => setOpenCreatePost(!isOpenCreatePost)}
        >
          {isOpenCreatePost ? "x" : "+"}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
