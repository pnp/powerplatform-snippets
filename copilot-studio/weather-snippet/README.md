# Weather Snippet

This is a snippet that demonstrates how to use the MSN Weather - Get current weather action in a plugin action.

## Minimal path to awesome

1. Open a copilot in **Copilot Studio**
1. Select **Topics & Plugins**
1. Select **+ Add**
1. Select **Plugin Action (preview)**
1. Search for **Get Current Weather** and select the **Search** button
1. Select the **Get Current Weather** action from the **MSN Weather** connector
1. Select **Next**
1. Select **Finish**
1. Select the **MSN Weather - Get Current Weather** plugin action in the list (select the name)
1. Select the **...** in the upper right corner and select **Open code editor**
1. Make sure to copy the **name** of the **connection reference**
1. Paste the contents of the **[YAML-file](./source/weather.yaml)** in the code editor
1. Replace **{ REPLACE-WITH-CONNECTION-REFERENCE-NAME }** with the **connection reference name** you copied two steps earlier
1. Save the **plugin action**
1. Select **Generative AI**
1. Scroll down to **Dynamic Chaining with generative actions (preview)** and enable it by flipping the toggle on
1. Test out the **plugin action** by using the **Test copilot** section and send `What's the current weather in Amsterdam`
1. When you get the Amsterdam weather, you're **done**!
