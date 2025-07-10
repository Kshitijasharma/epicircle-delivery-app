// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, FlatList, Alert } from "react-native";
// import { Text, Card, Button, Badge } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient";
// import axios from "axios";

// interface Pickup {
//   id: number;
//   customerName?: string;
//   customerPhone?: string;
//   address: string;
//   date: string;
//   status: string;
//   items?: { name: string; quantity: number; price: number }[];
// }

// export default function PendingApprovals() {
//   const [pickups, setPickups] = useState<Pickup[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [pendingPickups, setPendingPickups] = useState([]);

//   const fetchPending = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get<Pickup[]>(
//         "http://localhost:3001/pickups?status=Pending Approval"
//       );
//       setPickups(res.data);
//     } catch (error) {
//       console.error("Error fetching pickups:", error);
//       Alert.alert("Error", "Could not load pickups.");
//     } finally {
//       setLoading(false);
//     }
//   };

//  useEffect(() => {
//     const fetchPending = async () => {
//       const res = await axios.get("http://localhost:3001/pickups");
//       const filtered = res.data.filter(p => p.status === "Pending Approval");
//       setPendingPickups(filtered);
//     };
//     fetchPending();
//   }, []);

//   const approvePickup = async (id: number) => {
//     try {
//       await axios.patch(`http://localhost:3001/pickups/${id}`, {
//         status: "Completed",
//       });
//       Alert.alert("Approved", "Pickup has been marked as completed.");
//       fetchPending(); // Refresh list
//     } catch (error) {
//       console.error("Error approving pickup:", error);
//       Alert.alert("Error", "Could not approve pickup.");
//     }
//   };

//   return (
//     <LinearGradient
//       colors={["#0f2027", "#203a43", "#2c5364"]}
//       style={styles.gradient}
//     >
//       <View style={styles.container}>
//         <Text variant="headlineMedium" style={styles.heading}>
//           Pending Approvals
//         </Text>

//         {loading && <Text style={styles.loading}>Loading...</Text>}

//         <FlatList
//           data={pickups}
//           keyExtractor={(item) => item.id.toString()}
//           ListEmptyComponent={
//             !loading ? (
//               <Text style={styles.emptyText}>No pending pickups.</Text>
//             ) : null
//           }
//           renderItem={({ item }) => (
//             <Card style={styles.card}>
//               <Card.Title
//                 title={item.customerName || "Pickup"}
//                 subtitle={item.date}
//                 titleStyle={styles.title}
//                 subtitleStyle={styles.subtitle}
//               />
//               <Card.Content>
//                 <Text style={styles.info}>
//                   📞 {item.customerPhone || "N/A"}
//                 </Text>
//                 <Text style={styles.info}>📍 {item.address}</Text>
//                 <View style={styles.statusContainer}>
//                   <Badge style={styles.badge}>{item.status}</Badge>
//                 </View>
//                 <Button
//                   mode="contained"
//                   icon="check"
//                   style={styles.button}
//                   onPress={() => approvePickup(item.id)}
//                 >
//                   Approve Pickup
//                 </Button>
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
//   loading: {
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   emptyText: {
//     color: "#ccc",
//     textAlign: "center",
//     marginTop: 40,
//     fontSize: 16,
//   },
//   card: {
//     marginBottom: 16,
//     borderRadius: 12,
//     backgroundColor: "#222",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#ccc",
//   },
//   info: {
//     marginTop: 4,
//     fontSize: 14,
//     color: "#eee",
//   },
//   statusContainer: {
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   badge: {
//     backgroundColor: "#ff8800",
//     color: "#fff",
//     alignSelf: "flex-start",
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: "#00cc88",
//   },
// });

///////////////////////////////////////


import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { Text, Card, Button, Badge } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

interface Pickup {
  id: number;
  customerName?: string;
  customerPhone?: string;
  address: string;
  date: string;
  status: string;
  items?: { name: string; quantity: number; price: number }[];
}

export default function PendingApprovals() {
  const [pickups, setPickups] = useState<Pickup[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPending = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Pickup[]>(
        "http://localhost:3001/pickups"
      );
      const filtered = res.data.filter(p => p.status === "Pending Approval");
      setPickups(filtered);
    } catch (error) {
      console.error("Error fetching pickups:", error);
      Alert.alert("Error", "Could not load pickups.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const approvePickup = async (id: number) => {
    try {
      await axios.patch(`http://localhost:3001/pickups/${id}`, {
        status: "Completed",
      });
      Alert.alert("Approved", "Pickup has been marked as completed.");
      fetchPending(); // Refresh list
    } catch (error) {
      console.error("Error approving pickup:", error);
      Alert.alert("Error", "Could not approve pickup.");
    }
  };

  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.heading}>
          Pending Approvals
        </Text>

        {loading && <Text style={styles.loading}>Loading...</Text>}

        <FlatList
          data={pickups}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            !loading ? (
              <Text style={styles.emptyText}>No pending pickups.</Text>
            ) : null
          }
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title
                title={item.customerName || "Pickup"}
                subtitle={item.date}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
              />
              <Card.Content>
                <Text style={styles.info}>
                  📞 {item.customerPhone || "N/A"}
                </Text>
                <Text style={styles.info}>📍 {item.address}</Text>
                <View style={styles.statusContainer}>
                  <Badge style={styles.badge}>{item.status}</Badge>
                </View>
                <Button
                  mode="contained"
                  icon="check"
                  style={styles.button}
                  onPress={() => approvePickup(item.id)}
                >
                  Approve Pickup
                </Button>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  loading: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  emptyText: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
  },
  info: {
    marginTop: 4,
    fontSize: 14,
    color: "#eee",
  },
  statusContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#ff8800",
    color: "#fff",
    alignSelf: "flex-start",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#00cc88",
  },
});
