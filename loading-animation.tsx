import { MotiView } from "moti";
import { View } from "react-native";
export const LoadingAnimation = ({ size }: { size: number }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,

            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,

            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,

            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
        }}
      >
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,

            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: 0.5,
            borderColor: "white",
            shadowColor: "white",
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1,
            borderColor: "cyan",
            shadowColor: "white",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
      </View>
    </>
  );
};
