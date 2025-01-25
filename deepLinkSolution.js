The solution involves several steps to ensure proper deep link handling:

1. **Verify App.json:** Confirm that the URL scheme is correctly declared in your `app.json`:
```json
{
  "expo": {
    "scheme": "myAppScheme"
  }
}
```

2. **Use Linking.getInitialURL():**  Call `Linking.getInitialURL()` in your app's `useEffect` hook (or equivalent) after the component mounts.  This ensures that the initial URL is checked even if the app was launched from a deep link.

3. **Add and Remove Event Listeners:**  Make sure you are adding event listeners and remove them using the `Linking.removeEventListener` to prevent memory leaks.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const getInitialURL = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    const handleOpenURL = ({ url }) => {
      setDeepLink(url);
    };

    getInitialURL();

    const subscription = Linking.addEventListener('url', handleOpenURL);
    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl ? <Text>Initial URL: {initialUrl}</Text> : null}
      {deepLink ? <Text>Deep Link: {deepLink}</Text> : null}
    </View>
  );
}
```