// import { updateStart, updateError, updateSuccess } from './userSlice';
// import axios from "axios";

// export const updateUSer = async (user, dispatch) => {
//     dispatch(updateStart());
//     try {
//         const request = await axios.post("v1/update", user);
//         dispatch(updateSuccess(request.data));
//     } catch (error) {
//         dispatch(updateError());
//     }

// };