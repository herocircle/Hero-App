import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from '@gluestack-ui/themed';

type Props = {};

function FAQSection({}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#191919', marginBottom: 16 }}>
        Frequently Asked Questions
      </Text>

      <Text style={{ fontSize: 18, color: '#191919', marginBottom: 24 }}>
        Everything you need to know about HERO and how it works. Do you have additional questions? Feel free to reach out to us at hi@herocircle.app
      </Text>

      {/* First Accordion */}
      <View style={{ marginBottom: 16 }}>
        <TouchableOpacity onPress={() => toggleAccordion(1)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>How are HERO Mobilizers verified?</Text>
        </TouchableOpacity>
        {openIndex === 1 && (
          <View style={{ paddingVertical: 8 }}>
            <Text>
              New Circles are launched through the HERO Accelerator Program, which runs 3 times a year.
              Applications are accessible year-round through the HERO web app: https://herocircle.app/. The Accelerator Program accepts groups of 3-10 mobilizers applying together.
              {'\n\n'}
              Applications are assessed by the HERO Selection Board, an independent committee of 5+ experts in climate policy and advocacy. The Selection Board includes at least 2 representatives from the Global South, 2 Mobilizers (that are not receiving support from HERO) and 1 representative from the HERO Supporter Community. Expert members specialized in certain topics or regions can be invited in order to assess a Circle in a certain Region / Sector where the Selection Board is not expert.
              {'\n\n'}
              The primary application criteria are the following:
              {'\n\n'}
              1- A well-defined policy area of focus, addressing one of the 70 shifts for the sustainability transition as identified by the Systems Change Lab
              {'\n'}
              2- A history of successful climate advocacy, demonstrated through endorsements from individuals or organizations in the climate field.
              {'\n\n'}
              The Board also assesses formal criteria such as a minimum age of 18 and above, legal permission to work in the mobilizers’ country of residence, and no history of violent behavior. A full list of selection criteria is provided below.
              {'\n\n'}
              Applicants must be supported by at least 80% of the Board to continue to the Accelerator Program. Circles formed in the Accelerator Program must be supported by at least 80% of the HERO team to launch on the platform.
            </Text>
          </View>
        )}
        <Divider style={{ backgroundColor: 'black', height: 1, marginVertical: 8 }} />
      </View>

      <View style={{ marginBottom: 16 }}>
        <TouchableOpacity onPress={() => toggleAccordion(2)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>How is the money of my subscription used?</Text>
        </TouchableOpacity>
        {openIndex === 2 && (
          <View style={{ paddingVertical: 8 }}>
            <Text>
              Circles are financed through both citizen and organizational funding. HERO is the first membership platform providing a stable monthly income to climate mobilizers through this financing model.
              {'\n\n'}
              By subscribing to the Circle(s) of their choice, people and organizations around the world fund a stable income for groups of 3-10 mobilizers and engage in their activities through the app. Of all monthly subscriptions, 90% goes directly to the mobilizers and 10% goes to HERO.
            </Text>
          </View>
        )}
        <Divider style={{ backgroundColor: 'black', height: 1, marginVertical: 8 }} />
        </View>

      <View style={{ marginBottom: 16 }}>
        <TouchableOpacity onPress={() => toggleAccordion(3)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>What is HERO and how is it set up?</Text>
        </TouchableOpacity>
        {openIndex === 3 && (
          <View style={{ paddingVertical: 8 }}>
            <Text>
              HERO is the first membership platform that provides finance and capacity-building support to climate mobilizers: advocates, experts, and campaigners working on a particular climate policy area. Rather than supporting only individuals, HERO supports groups of mobilizers working together, termed Circles. Circles specialize in a policy topic and geographical region.
              {'\n\n'}
              HERO also provides capacity-building support to Circles. This is provided in the form of the HERO Accelerator Program, training and supporting new mobilizers to launch Circles on the platform. It is also provided through the HERO Labs: the Influence Lab and the Research and Strategy Lab provide ongoing support to HERO Circles in areas such as communications, campaign strategy, content creation, policy research, mentorship, and fundraising.
            </Text>
          </View>
        )}
        <Divider style={{ backgroundColor: 'black', height: 1, marginVertical: 8 }} />
        </View>
      <View style={{ marginBottom: 16 }}>
        <TouchableOpacity onPress={() => toggleAccordion(4)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>What is the founder’s pledge?</Text>
        </TouchableOpacity>
        {openIndex === 4 && (
          <View style={{ paddingVertical: 8 }}>
            <Text>
              HERO Labs B.V. is an organization established in The Netherlands as a Private Limited Liability Company. The founders commit to the world, and our community of mobilizers and supporters to give back 100% of our capital gains and dividends through HERO to support the next generation of climate leaders and the people most affected by the effects of climate change.
            </Text>
          </View>
        )}
        <Divider style={{ backgroundColor: 'black', height: 1, marginVertical: 8 }} />
      </View>
    </ScrollView>
  );
}

export default FAQSection;
