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
} from 'react-native';

import {
	colors,
	Text,
	Button,
	ThemeProvider
} from 'react-native-elements';

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
	},
};

const App: () => React$Node = () => {
  return (
    <>
			<ThemeProvider theme={theme}>
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

export default App;
