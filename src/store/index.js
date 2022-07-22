import { configureStore} from '@reduxjs/toolkit';
// importamos el reducer
import users from './slices/users';

export default configureStore({
    reducer: {
        users
    }
});