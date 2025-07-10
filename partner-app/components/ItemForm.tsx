// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { TextInput, Button, Text } from "react-native-paper";
// import axios from "axios";

// interface ItemFormProps {
//   pickupId: number;
//   onSubmit: () => void;
// }

// export default function ItemForm({ pickupId, onSubmit }: ItemFormProps) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [price, setPrice] = useState("");

//   const handleSubmit = async () => {
//     if (!name || !quantity || !price) {
//       alert("Please fill all fields");
//       return;
//     }

//     await axios.patch(`http://localhost:3001/pickups/${pickupId}`, {
//       items: [{ name, quantity: parseInt(quantity), price: parseFloat(price) }],
//     });

//     onSubmit();
//   };

//   return (
//     <View style={styles.container}>
//       <Text variant="titleMedium" style={styles.title}>
//         Add Item Details
//       </Text>
//       <TextInput
//         label="Item Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         label="Quantity"
//         value={quantity}
//         keyboardType="numeric"
//         onChangeText={setQuantity}
//         style={styles.input}
//       />
//       <TextInput
//         label="Price"
//         value={price}
//         keyboardType="numeric"
//         onChangeText={setPrice}
//         style={styles.input}
//       />
//       <Button mode="contained" onPress={handleSubmit} style={styles.button}>
//         Submit Items
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { marginVertical: 10 },
//   title: { marginBottom: 10 },
//   input: { marginBottom: 10 },
//   button: { marginTop: 10 },
// });


///////////////////////////////////


import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import axios from "axios";

interface ItemFormProps {
  pickupId: number;
  onSubmit: () => void;
}

export default function ItemForm({ pickupId, onSubmit }: ItemFormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    if (!name || !quantity || !price) {
      alert("Please fill all fields");
      return;
    }

    await axios.patch(`http://localhost:3001/pickups/${pickupId}`, {
      items: [{ name, quantity: parseInt(quantity), price: parseFloat(price) }],
    });

    onSubmit();
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.heading}>Add Item Details</Text>

        <TextInput
          label="Item Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          theme={inputTheme}
          textColor="#000"
        />
        <TextInput
          label="Quantity"
          value={quantity}
          keyboardType="numeric"
          onChangeText={setQuantity}
          style={styles.input}
          mode="outlined"
          theme={inputTheme}
          textColor="#000"
        />
        <TextInput
          label="Price"
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
          style={styles.input}
          mode="outlined"
          theme={inputTheme}
          textColor="#000"
        />

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Submit Item
        </Button>
      </Card.Content>
    </Card>
  );
}

const inputTheme = {
  colors: {
    text: "#000",
    primary: "#800080",
    placeholder: "#666",
    background: "#fff",
  },
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#800080",
    borderRadius: 6,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});
