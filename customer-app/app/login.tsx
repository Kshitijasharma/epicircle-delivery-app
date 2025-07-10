import React, { useState } from "react";
import { View, StyleSheet, Alert, ImageBackground, Animated } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Login() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert("Invalid", "Please enter a valid phone number.");
      return;
    }
    setStep("otp");
  };

  const handleVerifyOtp = async () => {
    if (otp === "123456") {
      await AsyncStorage.setItem(
        "userSession",
        JSON.stringify({ phoneNumber })
      );
      Alert.alert("Success", "Logged in successfully!");
      router.replace("/schedule");
    } else {
      Alert.alert("Invalid OTP", "The OTP is incorrect.", [
        {
          text: "Resend OTP",
          onPress: () => {
            setStep("phone");
            setOtp("");
          },
        },
        { text: "Try Again" },
      ]);
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
        <View style={styles.formContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.heading}>
                {step === "phone" ? "Login with Phone Number" : "Otp is send to your device. Please verify it!"}
              </Text>

              {step === "phone" ? (
                <>
                  <TextInput
                    label="Phone Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
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
                  <Button
                    mode="contained"
                    onPress={handleSendOtp}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                  >
                    Send OTP
                  </Button>
                </>
              ) : (
                <>
                  <TextInput
                    label="6-Digit OTP"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
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
                  <Button
                    mode="contained"
                    onPress={handleVerifyOtp}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                  >
                    Verify OTP
                  </Button>
                </>
              )}
            </Card.Content>
          </Card>
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
    justifyContent: "center",
    alignItems: "center",
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
