// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, FlatList } from "react-native";
// import { Text, Card } from "react-native-paper";
// import axios from "axios";

// // Define the Pickup type
// interface Pickup {
//   id: number;
//   address: string;
//   date: string;
//   status: string;
//   notes?: string;
// }

// export default function OrderHistory() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
//         setPickups(res.data);
//       } catch (error) {
//         console.error("Error fetching pickups:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium" style={styles.heading}>
//         Your Pickup History
//       </Text>

//       <FlatList
//         data={pickups}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContent}
//         renderItem={({ item }) => (
//           <Card style={styles.itemCard}>
//             <Card.Title
//               title={item.address}
//               subtitle={item.date}
//               titleStyle={styles.cardTitle}
//               subtitleStyle={styles.cardSubtitle}
//             />
//             <Card.Content>
//               <Text style={styles.statusText}>Status: {item.status}</Text>
//               {item.notes ? (
//                 <Text style={styles.notesText}>Notes: {item.notes}</Text>
//               ) : null}
//             </Card.Content>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   itemCard: {
//     marginBottom: 12,
//     borderRadius: 10,
//     elevation: 3,
//     backgroundColor: "#ffffff",
//   },
//   cardTitle: {
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   cardSubtitle: {
//     color: "#666",
//     fontSize: 13,
//   },
//   statusText: {
//     marginTop: 5,
//     fontSize: 14,
//     color: "#333",
//   },
//   notesText: {
//     marginTop: 2,
//     fontSize: 13,
//     color: "#555",
//     fontStyle: "italic",
//   },
// });

//000000000000000000000000000000000000000
// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
// import { Text, Card } from "react-native-paper";
// import axios from "axios";

// interface Pickup {
//   id: number;
//   address: string;
//   date: string;
//   status: string;
//   notes?: string;
// }

// export default function OrderHistory() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
//         setPickups(res.data);
//       } catch (error) {
//         console.error("Error fetching pickups:", error);
//       }
//     };
//     fetchData();
//   }, []);

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
//         <View style={styles.formContainer}>
//           <Card style={styles.card}>
//             <Card.Content>
//               <Text style={styles.heading}>Your Pickup History</Text>

//               <FlatList
//                 data={pickups}
//                 keyExtractor={(item) => item.id.toString()}
//                 contentContainerStyle={styles.listContent}
//                 renderItem={({ item }) => (
//                   <View style={styles.itemContainer}>
//                     <Text style={styles.itemAddress}>{item.address}</Text>
//                     <Text style={styles.itemDate}>{item.date}</Text>
//                     <View style={styles.statusContainer}>
//                       <Text style={styles.statusLabel}>Status:</Text>
//                       <Text style={styles.statusValue}>{item.status}</Text>
//                     </View>
//                     {item.notes ? (
//                       <Text style={styles.notesText}>Notes: {item.notes}</Text>
//                     ) : null}
//                   </View>
//                 )}
//               />
//             </Card.Content>
//           </Card>
//         </View>
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
//     alignItems: "center",
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
//     maxHeight: "90%",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#ffffff",
//     marginBottom: 20,
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     backgroundColor: "#111",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 12,
//   },
//   itemAddress: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   itemDate: {
//     color: "#ccc",
//     fontSize: 13,
//     marginTop: 2,
//   },
//   statusContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 6,
//   },
//   statusLabel: {
//     fontSize: 14,
//     color: "#90e0ef",
//     fontWeight: "600",
//     marginRight: 4,
//   },
//   statusValue: {
//     fontSize: 14,
//     color: "#fff",
//   },
//   notesText: {
//     marginTop: 4,
//     fontSize: 13,
//     color: "#ccc",
//     fontStyle: "italic",
//   },
// });

//..................................................


// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, ImageBackground } from "react-native";
// import { Text, Card } from "react-native-paper";
// import axios from "axios";
// import { FlatList } from "react-native-gesture-handler"; // Use this if you prefer better scroll performance

// interface Pickup {
//   id: number;
//   address: string;
//   date: string;
//   status: string;
//   notes?: string;
// }

// export default function OrderHistory() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
//         setPickups(res.data);
//       } catch (error) {
//         console.error("Error fetching pickups:", error);
//       }
//     };
//     fetchData();
//   }, []);

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
//         <View style={styles.formContainer}>
//           <Card style={styles.card}>
//             <Card.Content>
//               <Text style={styles.heading}>Your Pickup History</Text>

//               <FlatList
//                 data={pickups}
//                 keyExtractor={(item) => item.id.toString()}
//                 contentContainerStyle={styles.listContent}
//                 showsVerticalScrollIndicator={false}
//                 renderItem={({ item }) => (
//                   <View style={styles.itemContainer}>
//                     <Text style={styles.itemAddress}>{item.address}</Text>
//                     <Text style={styles.itemDate}>{item.date}</Text>
//                     <View style={styles.statusContainer}>
//                       <Text style={styles.statusLabel}>Status:</Text>
//                       <Text style={styles.statusValue}>{item.status}</Text>
//                     </View>
//                     {item.notes ? (
//                       <Text style={styles.notesText}>Notes: {item.notes}</Text>
//                     ) : null}
//                   </View>
//                 )}
//               />
//             </Card.Content>
//           </Card>
//         </View>
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
//     alignItems: "center",
//     padding: 20,
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: 400,
//     flex: 1,
//   },
//   card: {
//     backgroundColor: "#000",
//     borderRadius: 12,
//     elevation: 6,
//     paddingVertical: 20,
//     paddingHorizontal: 16,
//     flex: 1,
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#ffffff",
//     marginBottom: 16,
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     backgroundColor: "#111",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 12,
//   },
//   itemAddress: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   itemDate: {
//     color: "#ccc",
//     fontSize: 13,
//     marginTop: 2,
//   },
//   statusContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 6,
//   },
//   statusLabel: {
//     fontSize: 14,
//     color: "#90e0ef",
//     fontWeight: "600",
//     marginRight: 4,
//   },
//   statusValue: {
//     fontSize: 14,
//     color: "#fff",
//   },
//   notesText: {
//     marginTop: 4,
//     fontSize: 13,
//     color: "#ccc",
//     fontStyle: "italic",
//   },
// });


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Text, Chip } from "react-native-paper";
import axios from "axios";

interface Pickup {
  id: number;
  address: string;
  date: string;
  status: string;
  notes?: string;
}

export default function OrderHistory() {
  const [pickups, setPickups] = useState<Pickup[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Pickup[]>("http://localhost:3001/pickups");
        setPickups(res.data);
      } catch (error) {
        console.error("Error fetching pickups:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/truck.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.1,
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Your Pickup History</Text>

          <FlatList
            data={pickups}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.address}>{item.address}</Text>
                  <Chip
                    mode="outlined"
                    style={styles.statusChip}
                    textStyle={styles.statusChipText}
                  >
                    {item.status}
                  </Chip>
                </View>
                <Text style={styles.date}>{item.date}</Text>
                {item.notes ? (
                  <Text style={styles.notes}>📝 {item.notes}</Text>
                ) : null}
              </View>
            )}
          />
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 40,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  address: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    flexWrap: "wrap",
  },
  statusChip: {
    backgroundColor: "#e0f7fa",
    borderColor: "#00bcd4",
    height: 28,
  },
  statusChipText: {
    color: "#007c91",
    fontSize: 12,
    fontWeight: "600",
  },
  date: {
    color: "#666",
    fontSize: 13,
    marginTop: 8,
  },
  notes: {
    marginTop: 8,
    fontSize: 13,
    color: "#555",
    fontStyle: "italic",
  },
});
