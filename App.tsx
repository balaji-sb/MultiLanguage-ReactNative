import {View, Text, Button} from 'react-native';
import React from 'react';
import './src/localization/i18next';
import {useLocalization} from './src/localization';
import i18next from 'i18next';

const App = () => {
  const {locale} = useLocalization();

  return (
    <View>
      <Text>{locale('about.name')}</Text>
      <Text>{locale('about.title')}</Text>
      <Text>{locale('about.role')}</Text>

      <Button
        title="Change to tamil"
        onPress={() => i18next.changeLanguage('ta')}
      />

      <Button
        title="Change to english"
        onPress={() => i18next.changeLanguage('en')}
      />

      <Button
        title="Change to kannda"
        onPress={() => i18next.changeLanguage('ka')}
      />
    </View>
  );
};

export default App;
