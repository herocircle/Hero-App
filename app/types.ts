import { NativeStackNavigationProp  } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  RegisterV2: { amount: string; slug: string; isMonthly: boolean };

};

export type NavigationProps = NativeStackNavigationProp <RootStackParamList>;
