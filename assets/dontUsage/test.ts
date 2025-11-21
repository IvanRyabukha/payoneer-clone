// const translateY = useSharedValue(50);
// const opacity = useSharedValue(0);
// useEffect(() => {
//   if (error) {
//     translateY.value = withTiming(0, {
//       duration: 400,
//       easing: Easing.out(Easing.quad),
//     });
//     opacity.value = withTiming(1, {
//       duration: 400,
//       easing: Easing.out(Easing.quad),
//     });
//   } else {
//     translateY.value = withTiming(50, {
//       duration: 400,
//       easing: Easing.in(Easing.quad),
//     });
//     opacity.value = withTiming(0, {
//       duration: 300,
//       easing: Easing.in(Easing.quad),
//     });
//   }
// }, [error]);

// import { useAnimatedStyle } from 'react-native-reanimated';
// import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
// const animatedError = useAnimatedStyle(() => ({
//   transform: [{ translateY: translateY.value }],
//   opacity: opacity.value,
// }));

// REDUX
// import { useAppDispatch, useAppSelector } from '@/api/store/hooks/store.hooks';
// import * as authSlice from '@/api/store/slices/auth.slice';
//   const dispatch = useAppDispatch();
//   const { status, error } = useAppSelector(state => state.auth);
//   const registerUser = () => {
//     if (!email || !password) {
//       return;
//     }

//     dispatch(authSlice.registerUser({ email, password }));

//     if (!error) {
//       navigation.reset({
//         index: 1,
//         routes: [{ name: 'LoginScreen' }, { name: 'ConfirmEmailScreen' }],
//       });
//     }
//   };
