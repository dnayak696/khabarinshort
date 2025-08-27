import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export default function PrivacyPolicy() {
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> Privacy Policy </Text>
      <Text>
        {' '}
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> Interpretation and Definitions</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> Interpretation</Text>
      <Text>
        {' '}
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Definitions</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>For the purposes of this Privacy Policy:</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> Children’s Privacy</Text>
      <Text>
        If We need to rely on consent as a legal basis for processing Your
        information and Your country requires consent from a parent, We may
        require Your parent’s consent before We collect and use that
        information.{' '}
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> Changes to this Privacy Policy</Text>
      <Text>
        We may update Our Privacy Policy from time to time. We will notify You
        of any changes by posting the new Privacy Policy on this page. We will
        let You know via email and/or a prominent notice on Our Service, prior
        to the change becoming effective and update the “Last updated” date at
        the top of this Privacy Policy. You are advised to review this Privacy
        Policy periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </Text>

      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Contact Us</Text>
      <Text>
        {' '}
        If you have any questions about this Privacy Policy, You can contact us:
      </Text>
      <Text>By email: dnayak2016@gmail.com</Text>
    </View>
  );
}
