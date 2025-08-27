import React from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import AboutUs from './info/AboutUs';
import ContactUs from './info/ContactUs';
import PrivacyPolicy from './info/PrivacyPolicy';

export default function Info() {
  const [expandedAbout, setExpandedAbout] = React.useState(true);
  const [expandedContact, setExpandedContact] = React.useState(false);
  const [expandedPrivacy, setExpandedPrivacy] = React.useState(false);

  const handlePressAbout = () => setExpandedAbout(!expandedAbout);
  const handlePressContact = () => setExpandedContact(!expandedContact);
  const handlePressPrivacy = () => setExpandedPrivacy(!expandedPrivacy);

  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          key="1"
          title="About us"
          left={props => <List.Icon {...props} icon="account-group" />}
          expanded={expandedAbout}
          onPress={handlePressAbout}>
          <AboutUs />
        </List.Accordion>

        <List.Accordion
          key="2"
          title="Contact Us"
          left={props => <List.Icon {...props} icon="email" />}
          expanded={expandedContact}
          onPress={handlePressContact}>
          <ContactUs />
        </List.Accordion>

        <List.Accordion
          key="3"
          title="Privacy policy"
          left={props => <List.Icon {...props} icon="book-lock" />}
          expanded={expandedPrivacy}
          onPress={handlePressPrivacy}>
          <PrivacyPolicy />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}
