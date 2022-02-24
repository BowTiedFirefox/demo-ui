import React from "react";
import "./sass/global.scss";

import {Button, ThemeProvider, Stack, IconLockClosed} from 'degen'


const App = () => {


  return (
    <ThemeProvider>
      <Stack align="center">
        <Button
          prefix={<IconLockClosed />}
          variant="primary"
          width={{ xs: 'full', md: 'max' }}
        >
          Connect Wallet
        </Button>
      </Stack>
    </ThemeProvider>
  )
};

export default App;
