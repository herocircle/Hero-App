import React from "react";
import Footer from "@/components/footer";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

function PrivacyPolicy() {
  const handleEmailPress = () => {
    Linking.openURL("mailto:hi@hero-labs.co");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Your privacy and right to informational self-determination is very
          important to us, and we take special care in processing the personal
          data that you provide to us.{"\n"}
          In this sense, HERO Labs B.V. guarantees compliance with current
          regulations on the protection of personal data. The use of this
          website implies acceptance of this privacy policy.
        </Text>
        <Text style={styles.subHeader}>What is personal data?</Text>
        <Text style={styles.paragraph}>
          Personal data is any data related to an identified or physical person.
        </Text>
        <Text style={styles.subHeader}>What information do we collect?</Text>
        <Text style={styles.paragraph}>
          The data we collect and store in our databases are: full name, email,
          date of birth, country of residence, and what excites you more about
          HERO. We do not collect sensitive information such as racial origin,
          personal beliefs, religious or spiritual beliefs, etc.
        </Text>
        <Text style={styles.subHeader}>
          Purposes of the processing of personal data
        </Text>
        <Text style={styles.paragraph}>
          HERO Labs Co. has the duty to inform the users of the website about
          the collection of personal data that is carried out by completing the
          forms included in the website. In this sense, HERO Labs Co., will be
          responsible for the data collected through the means described above.
          In turn, we inform users that the purpose of processing the data
          collected includes:{"\n"}
          <Text style={styles.listItem}>
            • Comply with internal policies and procedures.{"\n"}
          </Text>
          <Text style={styles.listItem}>
            • Send communications by any means, including marketing actions,
            advertising, recommendations on HERO initiatives, inform on latest
            news and product updates.{"\n"}
          </Text>
        </Text>
        <Text style={styles.subHeader}>
          With whom do we share your personal data and for what purposes?
        </Text>
        <Text style={styles.paragraph}>
          We will not market, offer on leasing, rent or otherwise disclose your
          personal data to third parties, except for service providers such as
          consultants, technology service providers and other external
          consultants or suppliers, who are required to
          {"\n"} i) process the data in accordance with the purposes described
          above . {"\n"}ii) comply with applicable regulations and {"\n"}iii)
          adopt appropriate technical and organizational measures for the
          protection of your personal data.
        </Text>
        <Text style={styles.subHeader}>
          How do we preserve the quality of the data?‍
        </Text>
        <Text style={styles.paragraph}>
          The owner of personal data has the right to know what personal data we
          have in our databases. Likewise, you can exercise the rights of
          access, rectification, update and/or request the deletion of your
          personal data from our database as well as revoke the consent granted
          by this, by directing your inquiry to:
        </Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.paragraph, styles.email]}>hi@hero-labs.co</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}>
          Consent: when you enter the requested data to participate in the hero
          brand platform you provide consent, free, expressed, informed and
          unequivocal, to the processing of your personal data, in accordance
          with this privacy policy.
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "black",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: "black",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
  email: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default PrivacyPolicy;
