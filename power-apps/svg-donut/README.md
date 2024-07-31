# SVG Donut

This snippet shows how to add an SVG donut visual that gets data dynamically from your Power App to fill in the donut to show an amount used and amount remaining. 

![A basic example](./assets/donut.png)

This is for the donut visual only but this can be used within a gallery along with labels to accomplish a visual like shown below.

![An example](./assets/donut-in-gallery.png)

## Minimal path to awesome
> **_NOTE:_** The recommended best practice is to utilize this YAML snippet inside of a canvas component for reusability. 

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/svg-donut.yaml)** 
1. Right click on the screen where you want to add the snippet and select "Paste YAML"
![View of the paste code button](./assets/pastecode.png)
1. Select the **imgSVGDonut** control and go to the **Image** property
1. Replace **{ Replace-With-Dividend-Value }** with the **Number value that you want in the dividend of the calculation** 
1. Replace **{ Replace-With-Divisor-Value }** with the **Number value that you want in the divisor of the calculation** 
    ![View of the code](./assets/pastedsnippet.png)
1. Once you replace those values, the SVG donut will appear and be filled in
  ![View of the code](./assets/workingsnippet.png)

  ## Steps to use as a component
1. Open your Power App in edit mode
1. Select the **components** tab in the tree view
![components tab](./assets/componentstab.png)
1. Select **New component**
1. Rename your component to something relevant like **SVGDonut**
1. In the **Custom Properties** panel, select **New custom property**
1. For **Display name** input the text **Dividend**
1. Change the **Data type** to **Number**
![dividend property](./assets/component_dividend.png)
1. Select **Create**
1. In the **Custom Properties** panel, select **New custom property**
1. For **Display name** input the text **Divisor**
1. Change the **Data type** to **Number**
![divisor property](./assets/component_divisor.png)
1. Select **Create**
1. Right click in the component and select **Paste Code**
![paste code](./assets/componentPasteCode.png)
1. Select the **container object** and go to the **Dividend** property and put in your dividend value
![component items property](./assets/component_dividend_value.png)
1. Select the **container object** and go to the **Divisor** property and put in your divisor value
![component items property](./assets/component_divisor_value.png)
1. Select the **imgSVGDonut** control and go to the **Image** property and replace **{REPLACE-WITH-DIVIDEND-VALUE}** with **{INSERT-NAME-OF-YOUR-COMPONENT}.Dividend** and **{REPLACE-WITH-DIVISOR-VALUE}** with **{INSERT-NAME-OF-YOUR-COMPONENT}.Divisor**
![gallery items](./assets/component_svg_image_complete.png)

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/svg-donut" aria-hidden="true" />
