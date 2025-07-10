// import React, { useState } from "react";
// import { View, StyleSheet, Alert } from "react-native";
// import { TextInput, Button, Text } from "react-native-paper";
// import axios from "axios";
// import { useRouter } from "expo-router";

// export default function SchedulePickup() {
//   const [address, setAddress] = useState<string>("");
//   const [date, setDate] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");
//   const router = useRouter();

//   const handleSubmit = async () => {
//     if (!address || !date) {
//       Alert.alert("Error", "Address and Date are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3001/pickups", {
//         address,
//         date,
//         notes,
//         status: "Scheduled",
//       });

//       Alert.alert("Success", "Pickup scheduled!");
//       router.replace("/"); // Go back to Home
//     } catch (error) {
//       Alert.alert("Error", "Could not schedule pickup.");
//       console.error("Schedule Error:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text variant="headlineSmall" style={{ marginBottom: 20 }}>
//         Schedule a Pickup
//       </Text>

//       <TextInput
//         label="Address"
//         value={address}
//         onChangeText={setAddress}
//         style={{ marginBottom: 10 }}
//       />

//       <TextInput
//         label="Date & Time"
//         value={date}
//         onChangeText={setDate}
//         placeholder="e.g. 2025-07-10 10:00 AM"
//         style={{ marginBottom: 10 }}
//       />

//       <TextInput
//         label="Notes"
//         value={notes}
//         onChangeText={setNotes}
//         style={{ marginBottom: 10 }}
//       />

//       <Button mode="contained" onPress={handleSubmit}>
//         Submit Pickup
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
// });

//----------------------------------------------


// import React, { useState } from "react";
// import { View, StyleSheet, Alert } from "react-native";
// import { TextInput, Button, Text, Card } from "react-native-paper";
// import axios from "axios";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";

// export default function SchedulePickup() {
//   const [address, setAddress] = useState<string>("");
//   const [date, setDate] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");
//   const router = useRouter();

//   const handleSubmit = async () => {
//     if (!address || !date) {
//       Alert.alert("Error", "Address and Date are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3001/pickups", {
//         address,
//         date,
//         notes,
//         status: "Scheduled",
//       });

//       Alert.alert("Success", "Pickup scheduled!");
//       router.replace("/"); // Go back to Home
//     } catch (error) {
//       Alert.alert("Error", "Could not schedule pickup.");
//       console.error("Schedule Error:", error);
//     }
//   };

//   return (
//     <LinearGradient colors={["#4b0082", "#800080", "#d1a3d1"]} style={styles.gradient}>
//       <View style={styles.container}>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text variant="headlineMedium" style={styles.heading}>
//               Schedule a Pickup
//             </Text>

//             <TextInput
//               label="Address"
//               value={address}
//               onChangeText={setAddress}
//               style={styles.input}
//             />

//             <TextInput
//               label="Date & Time"
//               value={date}
//               onChangeText={setDate}
//               placeholder="e.g. 2025-07-10 10:00 AM"
//               style={styles.input}
//             />

//             <TextInput
//               label="Notes"
//               value={notes}
//               onChangeText={setNotes}
//               style={styles.input}
//             />

//             <Button mode="contained" onPress={handleSubmit} style={styles.button}>
//               Submit Pickup
//             </Button>
//           </Card.Content>
//         </Card>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   card: {
//     width: "40%",
//     padding: 20,
//     borderRadius: 12,
//     elevation: 4,
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 10,
//   },
// });

//ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// import React, { useState } from "react";
// import { View, StyleSheet, Alert } from "react-native";
// import { TextInput, Button, Text, Card } from "react-native-paper";
// import axios from "axios";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";

// export default function SchedulePickup() {
//   const [address, setAddress] = useState<string>("");
//   const [date, setDate] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");
//   const router = useRouter();

//   const handleSubmit = async () => {
//     if (!address || !date) {
//       Alert.alert("Error", "Address and Date are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3001/pickups", {
//         address,
//         date,
//         notes,
//         status: "Scheduled",
//       });

//       // ✅ Show alert without buttons
//       Alert.alert("Success", "Pickup scheduled!");

//       // ✅ Navigate immediately
//       router.replace("/");

//     } catch (error) {
//       Alert.alert("Error", "Could not schedule pickup.");
//       console.error("Schedule Error:", error);
//     }
//   };

//   return (
//     <LinearGradient colors={["#0077b6", "#48cae4", "#0f2027", "#00cc00"]} style={styles.gradient}>
//       <View style={styles.container}>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text variant="headlineMedium" style={styles.heading}>
//               <h5>Schedule a Pickup</h5>
//             </Text>

//             <TextInput
//               label="Address"
//               value={address}
//               onChangeText={setAddress}
//               style={styles.input}
//             />

//             <TextInput
//               label="Date & Time"
//               value={date}
//               onChangeText={setDate}
//               placeholder="e.g. 2025-07-10 10:00 AM"
//               style={styles.input}
//             />

//             <TextInput
//               label="Notes"
//               value={notes}
//               onChangeText={setNotes}
//               style={styles.input}
//             />

//             <Button mode="contained" onPress={handleSubmit} style={styles.button}>
//               Submit Pickup
//             </Button>
//           </Card.Content>
//         </Card>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   card: {
//     width: "50%",
//     padding: 20,
//     borderRadius: 12,
//     elevation: 4,
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 10,
//   },
// });


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import React, { useState, useEffect, useRef } from "react";
// import { View, StyleSheet, Alert, ImageBackground, Animated } from "react-native";
// import { TextInput, Button, Text, Card } from "react-native-paper";
// import axios from "axios";
// import { useRouter } from "expo-router";

// export default function SchedulePickup() {
//   const [address, setAddress] = useState<string>("");
//   const [date, setDate] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");
//   const router = useRouter();

//   const slideAnim = useRef(new Animated.Value(300)).current; // Start below the screen

//   useEffect(() => {
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const handleSubmit = async () => {
//     if (!address || !date) {
//       Alert.alert("Error", "Address and Date are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3001/pickups", {
//         address,
//         date,
//         notes,
//         status: "Scheduled",
//       });

//       Alert.alert("Success", "Pickup scheduled!");
//       router.replace("/");
//     } catch (error) {
//       Alert.alert("Error", "Could not schedule pickup.");
//       console.error("Schedule Error:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("../assets/images/truck.png")}
//         style={styles.backgroundImage}
//         resizeMode="contain"
//         imageStyle={{
//           alignSelf: "flex-start",
//           opacity: 0.3,
//         }}
//       >
//         <Animated.View style={[styles.formContainer, { transform: [{ translateY: slideAnim }] }]}>
//           <Card style={styles.card}>
//             <Card.Content>
//               <Text style={styles.heading}>Schedule a Pickup</Text>

//               <TextInput
//                 label="Address"
//                 value={address}
//                 onChangeText={setAddress}
//                 style={styles.input}
//                 mode="outlined"
//                 theme={{
//                   colors: {
//                     text: "white",
//                     primary: "#90e0ef",
//                     placeholder: "#aaa",
//                     background: "#000",
//                   },
//                 }}
//               />

//               <TextInput
//                 label="Date & Time"
//                 value={date}
//                 onChangeText={setDate}
//                 placeholder="e.g. 2025-07-10 10:00 AM"
//                 style={styles.input}
//                 mode="outlined"
//                 theme={{
//                   colors: {
//                     text: "white",
//                     primary: "#90e0ef",
//                     placeholder: "#aaa",
//                     background: "#000",
//                   },
//                 }}
//               />

//               <TextInput
//                 label="Notes"
//                 value={notes}
//                 onChangeText={setNotes}
//                 style={styles.input}
//                 mode="outlined"
//                 multiline
//                 theme={{
//                   colors: {
//                     text: "white",
//                     primary: "#90e0ef",
//                     placeholder: "#aaa",
//                     background: "#000",
//                   },
//                 }}
//               />

//               <Button
//                 mode="contained"
//                 onPress={handleSubmit}
//                 style={styles.button}
//                 contentStyle={styles.buttonContent}
//               >
//                 Submit Pickup
//               </Button>
//             </Card.Content>
//           </Card>
//         </Animated.View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center", // center the form horizontally
//     padding: 20,
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: 400,
//   },
//   card: {
//     backgroundColor: "#000",
//     borderRadius: 12,
//     elevation: 6,
//     paddingVertical: 20,
//     paddingHorizontal: 16,
//     width: "100%",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#ffffff",
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 16,
//   },
//   button: {
//     marginTop: 8,
//     backgroundColor: "#48cae4",
//     borderRadius: 6,
//   },
//   buttonContent: {
//     paddingVertical: 10,
//   },
// });

//000000000000000000000000000000000000

import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert, ImageBackground, Animated } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import axios from "axios";
import { useRouter } from "expo-router";

export default function SchedulePickup() {
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>(""); // NEW phone state
  const [date, setDate] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const router = useRouter();

  const slideAnim = useRef(new Animated.Value(300)).current; // Start below the screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSubmit = async () => {
    if (!address || !date || !phone) {
      Alert.alert("Error", "Address, Phone Number, and Date are required.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/pickups", {
        address,
        phone,
        date,
        notes,
        status: "Scheduled",
      });

      Alert.alert("Success", "Pickup scheduled!");
      router.replace("/");
    } catch (error) {
      Alert.alert("Error", "Could not schedule pickup.");
      console.error("Schedule Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/truck.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
        imageStyle={{
          alignSelf: "flex-start",
          opacity: 0.3,
        }}
      >
        <Animated.View style={[styles.formContainer, { transform: [{ translateY: slideAnim }] }]}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.heading}>Schedule a Pickup</Text>

              <TextInput
                label="Address"
                value={address}
                onChangeText={setAddress}
                style={styles.input}
                mode="outlined"
                theme={{
                  colors: {
                    text: "white",
                    primary: "#90e0ef",
                    placeholder: "#aaa",
                    background: "#000",
                  },
                }}
              />

              <TextInput
                label="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
                mode="outlined"
                theme={{
                  colors: {
                    text: "white",
                    primary: "#90e0ef",
                    placeholder: "#aaa",
                    background: "#000",
                  },
                }}
              />

              <TextInput
                label="Date & Time"
                value={date}
                onChangeText={setDate}
                placeholder="e.g. 2025-07-10 10:00 AM"
                style={styles.input}
                mode="outlined"
                theme={{
                  colors: {
                    text: "white",
                    primary: "#90e0ef",
                    placeholder: "#aaa",
                    background: "#000",
                  },
                }}
              />

              <TextInput
                label="Notes"
                value={notes}
                onChangeText={setNotes}
                style={styles.input}
                mode="outlined"
                multiline
                theme={{
                  colors: {
                    text: "white",
                    primary: "#90e0ef",
                    placeholder: "#aaa",
                    background: "#000",
                  },
                }}
              />

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}
                contentStyle={styles.buttonContent}
              >
                Submit Pickup
              </Button>
            </Card.Content>
          </Card>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // center the form horizontally
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 12,
    elevation: 6,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: "100%",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#48cae4",
    borderRadius: 6,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
