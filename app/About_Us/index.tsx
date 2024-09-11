import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import { Divider, Text } from '@gluestack-ui/themed';
import HeroTeamAbout from '@/components/Team_About/HeroTeamAbout';
import { WebView } from 'react-native-webview';
import CircleBoardAbout from '@/components/Circle_Board/CircleBoard';
import FAQSection from '@/components/Circle_Board/FAQ';
import SubscribeBlock from '@/components/SubscribeBlock';

type TeamMember = {
  id: number;
  name: string;
  role: string;
};

type Props = { teamMembers: TeamMember[]; };

function AboutUs() {
  const teamMembers: any = [];
  const [SelectedHeroMember, SetSelect] = useState<TeamMember | undefined>(teamMembers[0]);
  const [showAllTeam, setShowAllTeam] = useState(false);
const [showAllMembers , setXhowAllMembers]= useState(false)
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    Linking.openURL('https://www.youtube.com/embed/X1IGUowJL2o?autoplay=1');
  };

  const toggleView = () => {
    setShowAllTeam(!showAllTeam);
  };
  
  const toggleViewBoard = () => {
    setXhowAllMembers(!showAllMembers);
  };
  const handleButtonClick = () => {
    Linking.openURL('https://www.youtube.com/embed/X1IGUowJL2o?autoplay=1');
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 250, width: '100%' }}>
        <Image
          source={require('../../public/newTeamHero.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0202CC' }}>About Us</Text>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black' }}>The Story of HERO</Text>

        <Text style={{ fontSize: 16, color: 'black', marginBottom: 16 }}>
          In 2022, after a career in consulting, social entrepreneurship, and impact investing, Sylvain Ferrière decided to take a step back and think of ways of making a bigger impact on society and the environment. He discovered that while environmental mobilizers had significant impact on policy, they often weren't paid for their work.
        </Text>

        <Text style={{ fontSize: 16, color: 'black', marginBottom: 16 }}>
          A Google search led Sylvain to Mauricio Porras, who had founded HERO in Costa Rica in 2020 to address this issue. Mauricio's website and podcast highlighted the human side of climate work and the need for a sustainable income for mobilizers.
        </Text>

        <Text style={{ fontSize: 16, color: 'black', marginBottom: 16 }}>
          After a passionate three-hour conversation, Sylvain and Mauricio decided to partner. They brought in Mohamed Mnif, a multiple tech startup founder from Tunisia with expertise in decentralized finance to complete the founding team.
        </Text>
        <Text style={{ fontSize: 16, color: 'black', marginBottom: 16 }}>
          They relocated to Amsterdam and transformed the website into the world's first platform enabling citizens and organizations to provide basic income to climate mobilizers—researchers, campaigners, and negotiators.
        </Text>
        <Text style={{ fontSize: 16, color: 'black', marginBottom: 16 }}>
          In less than two years, they support over 100 mobilizers in 30 countries. Their mission: to fund 1 million mobilizers in the next decade, democratize climate action, and create a purpose-driven economy where climate work is a citizen-backed profession.
        </Text>

        <TouchableOpacity onPress={() => SetSelect(teamMembers[0])}>
          <Text style={{ color: '#0202CC', fontWeight: '700', textDecorationLine: 'underline', marginBottom: 16 }}>
            Meet the HERO Team
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "flex-start", width: "100%", paddingLeft: "5%" }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', marginBottom: 8, color: "black" }}>
          The Hero Team
        </Text>
      </View>

      <View style={{ padding: 16 }}>
        <Text color='black'>
          Meet the team on a mission to democratize climate action and provide a basic income to the next generation of 1 million mobilizers worldwide.
        </Text>
      </View>

      <Divider style={{ width: '98%', height: 2.5, backgroundColor: 'black', marginVertical: 16 }} />

      <TouchableOpacity onPress={toggleView}>
        <Text fontSize="$md" color="#0202CC" textAlign="center" marginVertical="$2" fontWeight="bold">
          {showAllTeam ? 'Show Less Team' : 'See All Team'}
        </Text>
      </TouchableOpacity>

      <ScrollView>
        <HeroTeamAbout showAllTeam={showAllTeam} />
      </ScrollView>

      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ height: 300, marginBottom: 24 }}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/X1IGUowJL2o?autoplay=0' }}
            style={{ flex: 1 }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: "black" }}>
            Empower the next 1 million mobilizers worldwide with a stable monthly income
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 24, color: "black" }}>
            Through your HERO subscription, you're powering a new kind of economy - one where passionate climate advocates are financially supported by the communities they serve, enhancing their ability to enact lasting, grassroots change worldwide.
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 24, color: "black" }}>
            Together, we support people-led solutions, from passing the EU Nature Restoration Law to protect 20% of the EU's Natural Ecosystems to creating powerful campaigns that mobilize millions to accelerate the global transition to clean energy.
          </Text>

          <TouchableOpacity
            
            onPress={handleButtonClick}
          >
                      <Text style={{ color: '#0202CC', fontWeight: '700', textDecorationLine: 'underline', marginBottom: 16 }}>

              Watch TEDx
            </Text>
            <View style={{ alignItems: "flex-start", width: "100%", paddingLeft: "5%" }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', marginBottom: 8, color: "black" }}>
        HERO Circle Board

        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text color='black'>
        The Selection Board, appointed annually by HERO, includes at least two representatives from the Global South and a representative of the mobilizers and one from the HERO Supporter Community. Experts may be invited for specific regional or sectoral assessments. Applicants need 80% Board approval to join the HERO platform.        </Text>
      </View>
      <TouchableOpacity onPress={toggleViewBoard}>
        <Text fontSize="$md" color="#0202CC" textAlign="center" marginVertical="$2" fontWeight="bold">
          {showAllMembers ? 'Show Less Boards' : 'See All Boards'}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <SubscribeBlock/>
      </ScrollView>
            <ScrollView>
              <CircleBoardAbout  showAllMembers={showAllMembers}/>
            </ScrollView>
            </TouchableOpacity >
        </View>
      </View>
      <ScrollView>
        <FAQSection />
      </ScrollView>
    </ScrollView>
  );
}

export default AboutUs;
