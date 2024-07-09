# Weather Snippet (Adaptive Card)

This is a snippet that demonstrates how to use the MSN Weather - Get current weather action in an action.  It uses an adaptive card as an output.

![A view of examples of the get current weather action where the user asks for the weather in Ottawa, Miami and La Palma](./assets/plugin-action-examples.png)

## Minimal path to awesome

1. Open a copilot in **Copilot Studio**
1. Select **Actions**
1. Select **+ Add an action**
1. Search for **Get Current Weather** and select the **Search** button
1. Select the **Get Current Weather** action from the **MSN Weather** connector
1. Select **Next**
1. Select **Finish**
1. Select the **MSN Weather - Get Current Weather** action in the list (select the name)
1. Select the **...** in the upper right corner and select **Open code editor**
1. Make sure to copy the **name** of the **connection reference**

    ![View of the code editor with a red line around the connection reference name](./assets/crname.png)

1. Paste the contents of the **[YAML-file](./source/weather.yaml)** in the code editor
1. Replace **{ REPLACE-WITH-CONNECTION-REFERENCE-NAME }** with the **connection reference name** you copied two steps earlier
1. Save the **action**
1. Select **Generative AI**
1. Scroll down to **Dynamic Chaining with generative actions (preview)** and enable it by flipping the toggle on
1. Test out the **action** by using the **Test copilot** section and send `What's the current weather in Amsterdam`
1. When you get the Amsterdam weather, you're **done**!

    ![View of the plugin action where the user asks for the current weather in Amsterdam and the copilot responds with the weather in Amsterdam, including a cloud to indicate that it's cloudy](./assets/plugin-action-example.png)

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/copilot-studio/msn-weather-current-weather-snippet-ac" aria-hidden="true" />
