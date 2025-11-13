import {
  FirebaseAuthTypes,
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '@react-native-firebase/auth';
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';

type PlainUser = {
  uid: string;
  email: string | null;
  emailVerified: boolean;
};

interface IAuthState {
  user: PlainUser | null;
  status: 'idle' | 'loading' | 'authenticated' | 'unverified' | 'error';
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const registerUser = createAsyncThunk<
  PlainUser,
  { email: string; password: string },
  { rejectValue: string }
>('auth/registerUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );

    await sendEmailVerification(userCredential.user);

    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      emailVerified: userCredential.user.emailVerified,
    };
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const loginUser = createAsyncThunk<
  FirebaseAuthTypes.User,
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await getAuth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const checkEmailVerification = createAsyncThunk<
  boolean,
  void,
  { rejectValue: string }
>('auth/checkEmailVerification', async (_, { rejectWithValue }) => {
  try {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      await currentUser.reload();
      return currentUser.emailVerified;
    }

    return false;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await getAuth().signOut();
      // TODO: set user credential to storage ?
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //TODO: make setUser for setup user from AsyncStorage ?
  },
  extraReducers(builder) {
    builder
      // register
      .addCase(registerUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<PlainUser>) => {
          state.user = action.payload;
          state.status = action.payload.emailVerified
            ? 'authenticated'
            : 'unverified';
        },
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Registration error';
      })
      //login
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
          state.user = action.payload;
          state.status = action.payload.emailVerified
            ? 'authenticated'
            : 'unverified';
          //TODO: save uid to EncryptedStorage ?
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Login error';
      })
      //logout
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.status = 'idle';
      })
      // Check verification
      .addCase(
        checkEmailVerification.fulfilled,
        (state, action: PayloadAction<boolean>) => {
          if (state.user) {
            state.status = action.payload ? 'authenticated' : 'unverified';
          }
        },
      );
  },
});

export default authSlice.reducer;
