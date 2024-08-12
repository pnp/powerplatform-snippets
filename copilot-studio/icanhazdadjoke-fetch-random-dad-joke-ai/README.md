# icanhazdadjoke - Fetch a random dad joke (Action with AI Generated Message)

This is a snippet that demonstrates how to use the icanhazdadjoke - fetch a random dad joke action in an action. It uses an AI generated message as an output.

![A view of an example of the output of the action in the test pane in Microsoft Copilot Studio](./assets/plugin-action-example.png)

## Authors

Snippet|Author(s)
--------|---------
icanhazdadjoke - Fetch a random dad joke (Action with AI Generated Message) | [Daniel Laskewitz](https://github.com/laskewitz) ([@laskewitz](https://www.twitter.com/laskewitz))

## Minimal path to awesome

1. Open a copilot in **Copilot Studio**
1. Select **Actions**
1. Select **+ Add an action**
1. Search for **Fetch a random dad joke** and select the **Search** button
1. Select the **Fetch a random dad joke** action from the **icanhazdadjoke (Independent Publisher)** connector
1. Scroll down a little and select **Copilot author authentication** under **End user authentication**
1. Select **Next**
1. Select **Finish**
1. Select the **icanhazdadjoke (Independent Publisher) - Fetch a random dad joke** action in the list (select the name)
1. Select **... More**  in the upper right corner and select **Open code editor**
1. Make sure to copy the **name** of the **connection reference** and keep it somewhere safe (you need it later)

    ![View of the code editor with a red line around the connection reference name](./assets/crname.png)

1. Replace the code in the code editor with the contents of the **[YAML-file](./source/dadjoke-ai.yaml)**
1. Replace **{ REPLACE-WITH-CONNECTION-REFERENCE-NAME }** with the **connection reference name** you copied earlier
1. Save the **action**
1. Select **Settings**
1. Select **Generative AI**
1. Select **Generative (preview)** in the **How should your copilot decide how to respond?** section
1. Select the **Save** button at the top
1. Test out the **action** by using the **Test copilot** pane

    ![A view of an example of the output of the plugin action in the test pane in Microsoft Copilot Studio](./assets/plugin-action-example.png)

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/copilot-studio/icanhazdadjoke-fetch-random-dad-joke-ai" aria-hidden="true" />
