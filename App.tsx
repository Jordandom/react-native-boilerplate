import { type FC } from 'react';
import { SafeAreaView } from 'react-native';

import { TamaguiProvider } from 'tamagui';

import { Button } from './Components/Button';
import config from './tamagui.config';

const App: FC = () => (
  <TamaguiProvider config={config}>
    <SafeAreaView>
      <Button />
    </SafeAreaView>
  </TamaguiProvider>
);

export default App;
