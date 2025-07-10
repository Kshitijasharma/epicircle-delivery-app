import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { Link } from "expo-router";
import useLoadFonts from "../hooks/useLoadFonts";

export default function Home() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#0077b6" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/truck.png")}
          style={styles.logo}
        />
        <View style={styles.navItems}>
          <Text style={styles.nav}>Home</Text>
          <Text style={styles.nav}>Contact</Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.navButton}>Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Center content */}
      <View style={styles.centerCard}>
        <Text style={styles.title}>Welcome to EpiCircle</Text>
        <Text style={styles.subtitle}>
          Book. Manage. Complete. All in one app.
        </Text>
        <Image
          source={require("../assets/images/truck.png")}
          style={styles.heroImage}
        />
      </View>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomButtons}>
        <Link href="/schedule" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Schedule Pickup</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/history" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Order History</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/pending-approvals" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Pending Approvals</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },
  navItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  nav: {
    color: "#333",
    fontSize: 15,
    fontWeight: "500",
  },
  navButton: {
    color: "#0077b6",
    fontSize: 15,
    fontWeight: "600",
  },
  centerCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    color: "#222",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 18,
  },
  heroImage: {
    width: 220,
    height: 130,
    resizeMode: "contain",
  },
  bottomButtons: {
    flexDirection: "column",
    gap: 12,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderColor: "#0077b6",
    borderWidth: 1.5,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#0077b6",
    fontSize: 16,
    fontWeight: "600",
  },
});
