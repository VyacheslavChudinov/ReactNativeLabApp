/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
	Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
	colors,
	ThemeProvider
} from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView contentInsetAdjustmentBehavior="automatic">
						<View>
							<Text>Hello world!</Text>
							<Button title="123"/>
						</View>
					</ScrollView>
      	</SafeAreaView>
			</ThemeProvider>
		</>
  );
};

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

export default App;
