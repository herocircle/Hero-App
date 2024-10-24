import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import * as Notifications from "expo-notifications";
import { I18nManager, LogBox, Platform, Text, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useAppState } from "./hooks/useAppState";
import Navigation from "./app/navigation";
import { useOnlineManager } from "./hooks/useOnlineManager";
import AuthContextProvider from "./contexts/AuthContext";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

(Text as unknown as TextWithDefaultProps).defaultProps = {
  ...((Text as unknown as TextWithDefaultProps).defaultProps || {}),
  allowFontScaling: false,
};
(TextInput as unknown as TextWithDefaultProps).defaultProps = {
  ...((TextInput as unknown as TextWithDefaultProps).defaultProps || {}),
  allowFontScaling: false,
};
export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  function onAppStateChange(status: string) {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GluestackUIProvider config={config}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Navigation />
              <Toast  />
            </GestureHandlerRootView>
          </GluestackUIProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
