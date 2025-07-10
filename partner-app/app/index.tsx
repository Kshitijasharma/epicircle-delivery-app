
// import React, { useState } from "react";
// import { View, StyleSheet, Alert, ImageBackground } from "react-native";
// import { TextInput, Button, Text, Card } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// export default function PartnerLogin() {
//   const [step, setStep] = useState<"phone" | "otp">("phone");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [otp, setOtp] = useState<string>("");
//   const router = useRouter();

//   const handleSendOtp = () => {
//     if (!phoneNumber || phoneNumber.length < 10) {
//       Alert.alert("Invalid", "Enter a valid phone number.");
//       return;
//     }
//     setStep("otp");
//   };

//   const handleVerifyOtp = async () => {
//     if (otp === "123456") {
//       await AsyncStorage.setItem(
//         "partnerSession",
//         JSON.stringify({ phoneNumber })
//       );
//       Alert.alert("Success", "OTP Verified!");
//       router.replace("/assigned-pickups");
//     } else {
//       Alert.alert("Invalid OTP", "Please try again.");
//     }
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/images/truck.png")}
//       style={styles.background}
//       imageStyle={{ opacity: 0.1, alignSelf: "flex-start" }}
//       resizeMode="contain"
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome Partner!</Text>

//         <Card style={styles.card} elevation={5}>
//           <Card.Content>
//             <Text style={styles.heading}>
//               {step === "phone" ? "Partner Login" : "Enter OTP"}
//             </Text>

//             {step === "phone" ? (
//               <>
//                 <TextInput
//                   label="Phone Number"
//                   keyboardType="phone-pad"
//                   value={phoneNumber}
//                   onChangeText={setPhoneNumber}
//                   mode="outlined"
//                   style={styles.input}
//                   theme={inputTheme}
                  
//                 />
//                 <Button
//                   mode="contained"
//                   onPress={handleSendOtp}
//                   style={styles.button}
//                   contentStyle={styles.buttonContent}
//                   labelStyle={{ color: "#ffff", fontWeight: "600" }} // Black button text
//                 >
//                   Send OTP
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <TextInput
//                   label="OTP"
//                   keyboardType="number-pad"
//                   value={otp}
//                   onChangeText={setOtp}
//                   mode="outlined"
//                   style={styles.input}
//                   theme={inputTheme}
//                 />
//                 <Button
//                   mode="contained"
//                   onPress={handleVerifyOtp}
//                   style={styles.button}
//                   contentStyle={styles.buttonContent}
//                   labelStyle={{ color: "#000", fontWeight: "600" }} // Black button text
//                 >
//                   Verify OTP
//                 </Button>
//               </>
//             )}
//           </Card.Content>
//         </Card>
//       </View>
//     </ImageBackground>
//   );
// }

// // 👇 This makes input text black
// const inputTheme = {
//   colors: {
//     primary: "#800080",
//     placeholder: "#666",
//     background: "#fff",
//     text: "#000",
//   },
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 24,
//   },
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   title: {
//     color: "#000",
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   card: {
//     width: "90%",
//     maxWidth: 380,
//     borderRadius: 16,
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     paddingVertical: 20,
//     paddingHorizontal: 16,
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 24,
//   },
//   input: {
//     marginBottom: 18,
//     color: "#333",
//   },
//   button: {
//     backgroundColor: "#800080",
//     borderRadius: 8,
//     marginTop: 8,
//   },
//   buttonContent: {
//     paddingVertical: 10,
//   },
// });

//.........................................................

// import React, { useState } from "react";
// import { View, StyleSheet, Alert, ImageBackground } from "react-native";
// import { TextInput, Button, Text, Card } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// export default function PartnerLogin() {
//   const [step, setStep] = useState<"phone" | "otp">("phone");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [otp, setOtp] = useState<string>("");
//   const router = useRouter();

//   const handleSendOtp = () => {
//     if (!phoneNumber || phoneNumber.length < 10) {
//       Alert.alert("Invalid", "Enter a valid phone number.");
//       return;
//     }
//     setStep("otp");
//   };

//   const handleVerifyOtp = async () => {
//     if (otp === "123456") {
//       await AsyncStorage.setItem(
//         "partnerSession",
//         JSON.stringify({ phoneNumber })
//       );
//       Alert.alert("Success", "OTP Verified!");
//       router.replace("/assigned-pickups");
//     } else {
//       Alert.alert("Invalid OTP", "Please try again.");
//     }
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/images/truck.png")}
//       style={styles.background}
//       imageStyle={{ opacity: 0.1, alignSelf: "flex-start" }}
//       resizeMode="contain"
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome Partner!</Text>

//         <Card style={styles.card} elevation={5}>
//           <Card.Content>
//             <Text style={styles.heading}>
//               {step === "phone" ? "Partner Login" : "Enter OTP"}
//             </Text>

//             {step === "phone" ? (
//               <>
//                 <TextInput
//                   label="Phone Number"
//                   keyboardType="phone-pad"
//                   value={phoneNumber}
//                   onChangeText={setPhoneNumber}
//                   mode="outlined"
//                   theme={inputTheme}
//                   style={[styles.input, { color: "#000" }]} // Force input text to black
//                 />
//                 <Button
//                   mode="contained"
//                   onPress={handleSendOtp}
//                   style={styles.button}
//                   contentStyle={styles.buttonContent}
//                   labelStyle={{ color: "#fff", fontWeight: "600" }} // White button text
//                 >
//                   Send OTP
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <TextInput
//                   label="OTP"
//                   keyboardType="number-pad"
//                   value={otp}
//                   onChangeText={setOtp}
//                   mode="outlined"
//                   theme={inputTheme}
//                   style={[styles.input, { color: "#000" }]} // Force input text to black
//                 />
//                 <Button
//                   mode="contained"
//                   onPress={handleVerifyOtp}
//                   style={styles.button}
//                   contentStyle={styles.buttonContent}
//                   labelStyle={{ color: "#fff", fontWeight: "600" }} // White button text
//                 >
//                   Verify OTP
//                 </Button>
//               </>
//             )}
//           </Card.Content>
//         </Card>
//       </View>
//     </ImageBackground>
//   );
// }

// // 👇 Input theme with black text color
// const inputTheme = {
//   colors: {
//     primary: "#800080",
//     placeholder: "#666",
//     background: "#fff",
//     text: "#000",
//   },
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 24,
//   },
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   title: {
//     color: "#000",
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   card: {
//     width: "90%",
//     maxWidth: 380,
//     borderRadius: 16,
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     paddingVertical: 20,
//     paddingHorizontal: 16,
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 24,
//   },
//   input: {
//     marginBottom: 18,
//   },
//   button: {
//     backgroundColor: "#800080",
//     borderRadius: 8,
//     marginTop: 8,
//   },
//   buttonContent: {
//     paddingVertical: 10,
//   },
// });

////////////////////////////////////////////////

import React, { useState } from "react";
import { View, StyleSheet, Alert, ImageBackground } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function PartnerLogin() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert("Invalid", "Enter a valid phone number.");
      return;
    }
    setStep("otp");
  };

  const handleVerifyOtp = async () => {
    if (otp === "123456") {
      await AsyncStorage.setItem(
        "partnerSession",
        JSON.stringify({ phoneNumber })
      );
      Alert.alert("Success", "OTP Verified!");
      router.replace("/assigned-pickups");
    } else {
      Alert.alert("Invalid OTP", "Please try again.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/truck.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome Partner!</Text>

        <Card style={styles.card} elevation={5}>
          <Card.Content>
            <Text style={styles.heading}>
              {step === "phone" ? "Partner Login" : "Enter OTP"}
            </Text>

            {step === "phone" ? (
              <>
                <TextInput
                  label="Phone Number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  mode="outlined"
                  theme={inputTheme}
                  style={styles.input}
                />
                <Button
                  mode="contained"
                  onPress={handleSendOtp}
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                  labelStyle={{ color: "#fff", fontWeight: "600" }}
                >
                  Send OTP
                </Button>
              </>
            ) : (
              <>
                <TextInput
                  label="OTP"
                  keyboardType="number-pad"
                  value={otp}
                  onChangeText={setOtp}
                  mode="outlined"
                  theme={inputTheme}
                  style={styles.input}
                />
                <Button
                  mode="contained"
                  onPress={handleVerifyOtp}
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                  labelStyle={{ color: "#fff", fontWeight: "600" }}
                >
                  Verify OTP
                </Button>
              </>
            )}
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
}

const inputTheme = {
  colors: {
    primary: "#800080",
    placeholder: "#666",
    background: "#fff",
    text: "#000",
  },
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.7)", // soft overlay for readability
    width: "100%",
  },
  title: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "90%",
    maxWidth: 380,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 24,
  },
  input: {
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#800080",
    borderRadius: 8,
    marginTop: 8,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
