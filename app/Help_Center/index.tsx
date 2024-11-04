import React from "react";
import Footer from "@/components/footer";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";

function HelpCenter() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Help Center</Text>

        <Text style={styles.boldText}>
          For feedback on the Hero App or technical difficulties
        </Text>

        <Text style={styles.normalText}>Email: hi@hero-labs.co</Text>

        <Text style={styles.boldText}>For background on HERO</Text>

        <Text style={styles.boldText}>Blog:</Text>
        <TouchableOpacity
          onPress={() => handlePress("https://medium.com/heroblog")}
        >
          <Text style={styles.linkText}>https://medium.com/heroblog</Text>
        </TouchableOpacity>

        <Text style={styles.boldText}>Web:</Text>
        <TouchableOpacity
          onPress={() => handlePress("https://herocircle.app/")}
        >
          <Text style={styles.linkText}>https://herocircle.app/</Text>
        </TouchableOpacity>

        <Text style={styles.boldText}>Podcast:</Text>
        <TouchableOpacity
          onPress={() =>
            handlePress(
              "https://open.spotify.com/show/3OLdPSPIYXHR4wHGNAQG30?si=YCPjg0hWTL6WwLY0GGRDfA&nd=1"
            )
          }
        >
          <Text style={styles.linkText}>
            https://open.spotify.com/show/3OLdPSPIYXHR4wHGNAQG30?si=YCPjg0hWTL6WwLY0GGRDfA&nd=1
          </Text>
        </TouchableOpacity>

        <Text style={styles.boldText}>
          For anything else (partnerships, to join the team)
        </Text>

        <Text style={styles.normalText}>Email: hi@hero-labs.co</Text>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    paddingBottom: 64,
    paddingTop:40,
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
    textAlign: "center",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  normalText: {
    fontSize: 16,
    color: "black",
    marginBottom: 16,
  },
  linkText: {
    fontSize: 16,
    color: "blue",
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});

export default HelpCenter;
