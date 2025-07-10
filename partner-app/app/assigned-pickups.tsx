

// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, FlatList, Linking } from "react-native";
// import { Text, Card, Button, Badge } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient";
// import axios from "axios";
// import { useRouter } from "expo-router";

// interface Pickup {
//   id: number;
//   customerName: string;
//   customerPhone: string;
//   address: string;
//   mapLink?: string;
//   date: string;
//   status: string;
// }

// export default function AssignedPickups() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
//         setPickups(res.data.filter((p) => p.status === "Scheduled"));
//       } catch (error) {
//         console.error("Error fetching pickups:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <LinearGradient
//       colors={["#4b0082", "#800080", "#d1a3d1"]}
//       style={styles.gradient}
//     >
//       <View style={styles.container}>
//         <Text variant="headlineMedium" style={styles.heading}>
//           Assigned Pickups
//         </Text>

//         <FlatList
//           data={pickups}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Card style={styles.card}>
//               <Card.Title
//                 title={item.customerName}
//                 subtitle={item.date}
//                 titleStyle={styles.title}
//                 subtitleStyle={styles.subtitle}
//               />
//               <Card.Content>
//                 <Text style={styles.info}>📞 {item.customerPhone}</Text>
//                 <Text style={styles.info}>📍 {item.address}</Text>

//                 <View style={styles.statusContainer}>
//                   <Badge style={styles.badge}>{item.status}</Badge>
//                 </View>

//                 <View style={styles.buttonRow}>
//                   {item.mapLink && (
//                     <Button
//                       mode="outlined"
//                       icon="map-marker"
//                       style={styles.outlinedButton}
//                       labelStyle={{ color: "#fff" }}
//                       onPress={() => Linking.openURL(item.mapLink!)}
//                     >
//                       View Location
//                     </Button>
//                   )}

//                   <Button
//                     mode="contained"
//                     icon="clipboard-text"
//                     style={styles.button}
//                     onPress={() =>
//                       router.push({
//                         pathname: "/pickup-details",
//                         params: { id: item.id.toString() },
//                       })
//                     }
//                   >
//                     Manage Pickup
//                   </Button>
//                 </View>
//               </Card.Content>
//             </Card>
//           )}
//         />
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
//     padding: 20,
//   },
//   heading: {
//     marginBottom: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 12,
//     elevation: 4,
//     backgroundColor: "#111",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#ccc",
//   },
//   info: {
//     marginTop: 4,
//     fontSize: 16,
//     color: "#eee",
//   },
//   statusContainer: {
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   badge: {
//     backgroundColor: "#00cc00",
//     color: "white",
//     alignSelf: "flex-start",
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   outlinedButton: {
//     borderColor: "#fff",
//     flex: 1,
//     marginRight: 8,
//   },
//   button: {
//     flex: 1,
//     backgroundColor: "#d1a3d1",
//   },
// });


// //-------------------------------
// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, FlatList, Linking, ImageBackground } from "react-native";
// import { Text, Card, Button, Badge } from "react-native-paper";
// import axios from "axios";
// import { useRouter } from "expo-router";

// interface Pickup {
//   id: number;
//   customerName: string;
//   customerPhone: string;
//   address: string;
//   mapLink?: string;
//   date: string;
//   status: string;
// }

// export default function AssignedPickups() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
//         setPickups(res.data.filter((p) => p.status === "Scheduled"));
//       } catch (error) {
//         console.error("Error fetching pickups:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <ImageBackground
//       source={require("../assets/images/truck.png")}
//       style={styles.background}
//       imageStyle={{ opacity: 0.1, alignSelf: "flex-start" }}
//       resizeMode="contain"
//     >
//       <View style={styles.container}>
//         <Text style={styles.heading}>Assigned Pickups</Text>

//         <FlatList
//           data={pickups}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 20 }}
//           renderItem={({ item }) => (
//             <Card style={styles.card} elevation={4}>
//               <Card.Title
//                 title={item.customerName}
//                 subtitle={item.date}
//                 titleStyle={styles.title}
//                 subtitleStyle={styles.subtitle}
//               />
//               <Card.Content>
//                 <Text style={styles.info}>📞 {item.customerPhone}</Text>
//                 <Text style={styles.info}>📍 {item.address}</Text>

//                 <View style={styles.statusContainer}>
//                   <Badge style={styles.badge}>{item.status}</Badge>
//                 </View>

//                 <View style={styles.buttonRow}>
//                   {item.mapLink && (
//                     <Button
//                       mode="outlined"
//                       icon="map-marker"
//                       style={styles.outlinedButton}
//                       labelStyle={styles.outlinedButtonLabel}
//                       onPress={() => Linking.openURL(item.mapLink!)}
//                     >
//                       View Location
//                     </Button>
//                   )}

//                   <Button
//                     mode="contained"
//                     icon="clipboard-text"
//                     style={styles.button}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={{ color: "#000", fontWeight: "600" }}
//                     onPress={() =>
//                       router.push({
//                         pathname: "/pickup-details",
//                         params: { id: item.id.toString() },
//                       })
//                     }
//                   >
//                     Manage Pickup
//                   </Button>
//                 </View>
//               </Card.Content>
//             </Card>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   container: {
//     flex: 1,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 16,
//     backgroundColor: "rgba(255,255,255,0.95)",
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#000",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//   },
//   info: {
//     marginTop: 6,
//     fontSize: 15,
//     color: "#333",
//   },
//   statusContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   badge: {
//     backgroundColor: "#00cc00",
//     color: "#fff",
//     alignSelf: "flex-start",
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 12,
//   },
//   outlinedButton: {
//     flex: 1,
//     marginRight: 8,
//     borderColor: "#800080",
//   },
//   outlinedButtonLabel: {
//     color: "#800080",
//     fontWeight: "500",
//   },
//   button: {
//     flex: 1,
//     backgroundColor: "#d1a3d1",
//     borderRadius: 6,
//   },
//   buttonContent: {
//     paddingVertical: 8,
//   },
// });

////////// new else use the above

import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Linking, ImageBackground } from "react-native";
import { Text, Card, Button, Badge } from "react-native-paper";
import axios from "axios";
import { useRouter } from "expo-router";

interface Pickup {
  id: number;
  customerName: string;
  customerPhone: string;
  address: string;
  mapLink?: string;
  date: string;
  status: string;
}

export default function AssignedPickups() {
  const [pickups, setPickups] = useState<Pickup[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
        setPickups(res.data.filter((p) => p.status === "Scheduled"));
      } catch (error) {
        console.error("Error fetching pickups:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/truck.png")} // ✅ Make sure the path is correct
      style={styles.background}
      imageStyle={{ opacity: 0.1 }}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text variant="headlineMedium" style={styles.heading}>
          Assigned Pickups
        </Text>

        <FlatList
          data={pickups}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title
                title={item.customerName}
                subtitle={item.date}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
              />
              <Card.Content>
                <Text style={styles.info}>📞 {item.customerPhone}</Text>
                <Text style={styles.info}>📍 {item.address}</Text>

                <View style={styles.statusContainer}>
                  <Badge style={styles.badge}>{item.status}</Badge>
                </View>

                <View style={styles.buttonRow}>
                  {item.mapLink && (
                    <Button
                      mode="outlined"
                      icon="map-marker"
                      style={styles.outlinedButton}
                      labelStyle={{ color: "#fff" }}
                      onPress={() => Linking.openURL(item.mapLink!)}
                    >
                      View Location
                    </Button>
                  )}

                  <Button
                    mode="contained"
                    icon="clipboard-text"
                    style={styles.button}
                    onPress={() =>
                      router.push({
                        pathname: "/pickup-details",
                        params: { id: item.id.toString() },
                      })
                    }
                  >
                    Manage Pickup
                  </Button>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(75, 0, 130, 0.7)", // Semi-transparent purple overlay
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#111",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
  },
  info: {
    marginTop: 4,
    fontSize: 16,
    color: "#eee",
  },
  statusContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#00cc00",
    color: "white",
    alignSelf: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  outlinedButton: {
    borderColor: "#fff",
    flex: 1,
    marginRight: 8,
  },
  button: {
    flex: 1,
    backgroundColor: "#d1a3d1",
  },
});
