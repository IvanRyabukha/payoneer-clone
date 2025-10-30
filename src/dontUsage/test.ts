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

// const animatedError = useAnimatedStyle(() => ({
//   transform: [{ translateY: translateY.value }],
//   opacity: opacity.value,
// }));
