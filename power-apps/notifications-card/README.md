# Notifications Card

This snippet shows how to implement a notifications card in Power Apps. 

![A basic example](./assets/notificationspreview.png)

## Minimal path to awesome

> **_NOTE:_** The recommended best practice is to utilize this YAML snippet inside of a canvas component for reusability

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/notifications-card.yaml)** 
1. Right click on the screen where you want to add the snippet and select "Paste YAML"
![View of the paste code button](./assets/pastecode.png)
1. Replace **Items Property** in the gallery with **your data**. If the field names change you'll also need to update the text property of the two text labels and the Icon property of the icon.
![Pasted Code](./assets/notificationsGal.png)

## Steps to use as a component
1. Open your Power App in edit mode
1. Select the **components** tab in the tree view
![components tab](./assets/componentstab.png)

1. Select **New component**
1. Rename your component to something relevant like **NotificationCard**
1. In the **Custom Properties** panel, select **New custom property**
1. For **Display name** input the text **Items**
1. Change the **Data type** to **Table**
![componentconfig](./assets/componentproperty.png)
1. Select **Create**
1. Right click in the component and select **Paste Code**
![paste code](./assets/componentPasteCode.png)
1. Select the **galNotifications** gallery and copy the code from the **Items** property
1. Select the **container object** and go to the **Items** property you just created and paste the code you copied
![component items property](./assets/componentItems.png)
1. Select the **galNotifications** gallery and go to the **Items** property and replace the code with the **{INSERT-NAME-OF-YOUR-COMPONENT}.Items**
![gallery items](./assets/galItems.png)

#### Learn more about YAML and integrating with Components
[![Watch the video](https://img.youtube.com/vi/WWCj1MgYlbM/hqdefault.jpg)](https://www.youtube.com/embed/WWCj1MgYlbM)


<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/notifications-card" aria-hidden="true" />
