import { useState } from 'react';
import './App.css';
import { useSelector } from "react-redux";
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Posts from './Components/Posts/Posts';
import CreatePost from './Components/ModalPost/CreatePost/CreatePost';
import EditPost from './Components/ModalPost/EditPost/EditPost';
import DeletePost from './Components/ModalPost/DeletePost/DeletePost';


function App() {
  const [isEditProfile, setEditProfile] = useState(false);
  const [isOpenCreatePost, setOpenCreatePost] = useState(false);
  const [isOpenModalDelete, setOpenModalDelete] = useState(false);
  const [isOpenModalEdit, setOpenModalEdit] = useState(false);
  const [dataEditPost, setDataEditPost] = useState({});
  const [postId, setPostId] = useState();

  return (
    <div className="App">
      <div className='flex flex-col lg:w-[70%] lg:mx-auto'>
        {isEditProfile && !isOpenCreatePost ?
          (<EditPage setEditProfile={setEditProfile} />) :
          !isEditProfile && !isOpenCreatePost ?
            (
              <>
                <Header setEditProfile={setEditProfile} />
                <Posts setOpenModalDelete={setOpenModalDelete} setOpenModalEdit={setOpenModalEdit}
                  setPostId={setPostId} setDataEditPost={setDataEditPost} />
                <Footer isOpenCreatePost={isOpenCreatePost} setOpenCreatePost={setOpenCreatePost} />
              </>
            ) :
            (
              <>
                <Header setEditProfile={setEditProfile} />
                <CreatePost setOpenCreatePost={setOpenCreatePost} />
                <Footer isOpenCreatePost={isOpenCreatePost} setOpenCreatePost={setOpenCreatePost} />
              </>
            )
        }
        {isOpenModalDelete && <DeletePost setOpenModalDelete={setOpenModalDelete} postId={postId} />}
        {isOpenModalEdit && <EditPost dataEditPost={dataEditPost} setOpenModalEdit={setOpenModalEdit} />}
      </div>
    </div>
  );
}

export default App;
