
// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Alert, ScrollView, ImageBackground } from "react-native";
// import { Text, Button, Card, Badge } from "react-native-paper";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import axios from "axios";
// import ItemForm from "../components/ItemForm";

// interface Pickup {
//   id: number;
//   customerName: string;
//   customerPhone: string;
//   address: string;
//   date: string;
//   status: string;
//   items?: { name: string; quantity: number; price: number }[];
// }

// export default function PickupDetails() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const [pickup, setPickup] = useState<Pickup | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchPickup = async () => {
//       const res = await axios.get<Pickup>(`http://localhost:3001/pickups/${id}`);
//       setPickup(res.data);
//     };
//     fetchPickup();
//   }, [id]);

//   const updateStatus = async (status: string) => {
//     await axios.patch(`http://localhost:3001/pickups/${id}`, { status });
//     setPickup((prev) => prev && { ...prev, status });
//     Alert.alert("Status Updated", `Pickup marked as ${status}`);
//   };

//   if (!pickup)
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={styles.loading}>Loading...</Text>
//       </View>
//     );

//   return (
//     <ImageBackground
//       source={require("../assets/images/truck.png")}
//       style={styles.background}
//       imageStyle={{ opacity: 0.1, alignSelf: "flex-start" }}
//       resizeMode="contain"
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Card style={styles.card} elevation={4}>
//           <Card.Title
//             title={pickup.customerName}
//             subtitle={pickup.date}
//             titleStyle={styles.title}
//             subtitleStyle={styles.subtitle}
//           />
//           <Card.Content>
//             <Text style={styles.info}>📞 {pickup.customerPhone}</Text>
//             <Text style={styles.info}>📍 {pickup.address}</Text>
//             <View style={styles.statusContainer}>
//               <Badge style={styles.badge}>{pickup.status}</Badge>
//             </View>
//           </Card.Content>
//         </Card>

//         {pickup.status === "Scheduled" && (
//           <Button
//             mode="contained"
//             style={styles.button}
//             labelStyle={styles.buttonLabel}
//             onPress={() => updateStatus("Accepted")}
//           >
//             Accept Pickup
//           </Button>
//         )}

//         {pickup.status === "Accepted" && (
//           <Button
//             mode="contained"
//             style={styles.button}
//             labelStyle={styles.buttonLabel}
//             onPress={() => updateStatus("In-Process")}
//           >
//             Start Pickup
//           </Button>
//         )}

//         {pickup.status === "In-Process" && (
//           <ItemForm
//             pickupId={pickup.id}
//             onSubmit={() => updateStatus("Pending Approval")}
//           />
//         )}

//         {pickup.status === "Pending Approval" && (
//           <Text style={styles.pendingText}>Waiting for customer approval...</Text>
//         )}

//         {pickup.status === "Completed" && (
//           <Text style={styles.completedText}>✅ Pickup completed!</Text>
//         )}
//       </ScrollView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loading: {
//     color: "#000",
//     fontSize: 16,
//   },
//   card: {
//     marginBottom: 20,
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#333",
//   },
//   info: {
//     marginTop: 4,
//     fontSize: 14,
//     color: "#333",
//   },
//   statusContainer: {
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   badge: {
//     backgroundColor: "#00cc00",
//     color: "white",
//     alignSelf: "flex-start",
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 6,
//   },
//   button: {
//     marginVertical: 10,
//     backgroundColor: "#800080", // purple
//     borderRadius: 6,
//   },
//   buttonLabel: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   pendingText: {
//     marginTop: 10,
//     fontWeight: "bold",
//     color: "#ff9900",
//     textAlign: "center",
//   },
//   completedText: {
//     marginTop: 10,
//     fontWeight: "bold",
//     color: "#00aa00",
//     textAlign: "center",
//   },
// });

//--------------------------------------------
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, ScrollView, ImageBackground } from "react-native";
import { Text, Button, Card, Badge } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import ItemForm from "../components/ItemForm";

interface Pickup {
  id: number;
  customerName?: string;
  customerPhone?: string;
  phone?: string;
  address: string;
  date: string;
  status: string;
  items?: { name: string; quantity: number; price: number }[];
}

export default function PickupDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [pickup, setPickup] = useState<Pickup | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPickup = async () => {
      const res = await axios.get<Pickup>(`http://localhost:3001/pickups/${id}`);
      setPickup(res.data);
    };
    fetchPickup();
    // auto-refresh every 5 seconds
  const interval = setInterval(fetchPickup, 5000);

  return () => clearInterval(interval); // cleanup
  }, [id]);

  const updateStatus = async (status: string) => {
    await axios.patch(`http://localhost:3001/pickups/${id}`, { status });
    setPickup((prev) => prev && { ...prev, status });
    Alert.alert("Status Updated", `Pickup marked as ${status}`);
  };

  if (!pickup) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <ImageBackground
      source={require("../assets/images/truck.png")}
      style={styles.background}
      imageStyle={{ opacity: 0.1, alignSelf: "flex-start" }}
      resizeMode="contain"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            title={pickup.customerName || "Pickup Details"}
            subtitle={pickup.date}
            titleStyle={styles.title}
            subtitleStyle={styles.subtitle}
          />
          <Card.Content>
            <Text style={styles.info}>📞 {pickup.customerPhone || pickup.phone || "N/A"}</Text>
            <Text style={styles.info}>📍 {pickup.address}</Text>
            <View style={styles.statusContainer}>
              <Badge style={styles.badge}>{pickup.status}</Badge>
            </View>
          </Card.Content>
        </Card>

        {pickup.status === "Scheduled" && (
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => updateStatus("Accepted")}
            labelStyle={styles.buttonLabel}
            contentStyle={styles.buttonContent}
          >
            Accept Pickup
          </Button>
        )}

        {pickup.status === "Accepted" && (
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => updateStatus("In-Process")}
            labelStyle={styles.buttonLabel}
            contentStyle={styles.buttonContent}
          >
            Start Pickup
          </Button>
        )}

        {pickup.status === "In-Process" && (
          <ItemForm
            pickupId={pickup.id}
            onSubmit={() => updateStatus("Pending Approval")}
          />
        )}

        {pickup.status === "Pending Approval" && (
          <Text style={styles.pendingText}>
            Waiting for customer approval...
          </Text>
        )}

        {pickup.status === "Completed" && (
          <Text style={styles.completedText}>✅ Pickup completed!</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    paddingBottom: 20,
  },
  loading: {
    marginTop: 50,
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
  },
  info: {
    marginTop: 4,
    fontSize: 14,
    color: "#444",
  },
  statusContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#00cc00",
    color: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#800080",
    borderRadius: 6,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonContent: {
    paddingVertical: 8,
  },
  pendingText: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#ff8800",
    textAlign: "center",
  },
  completedText: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#00aa00",
    textAlign: "center",
  },
});
