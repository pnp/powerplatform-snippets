# Form Factor Selector

Form factor selection in editor

Allow you to change the form factor in edit mode, helping you to design responsive applications

![Form Factor Selector](./assets/formfactorselector.png)

## Authors

Snippet|Author
--------|---------
David Zoonekyndt | [GitHub](https://github.com/DavidZoon) ([LinkedIn](https://www.linkedin.com/in/david-zoonekyndt/) )

## Minimal path to awesome

1. Open your canvas app in **Power Apps**
2. Copy the contents of the **[YAML-file](./source/formfactor.yaml)** 
3. Click on the three dots of the screen where you want to add the snippet and select "Paste"

### ⚠️⚠️⚠️ Important:

Set `Gallery.Y` to `-Self.Height` 

You need to replace for<b> every screen</b> the following properties, otherwise screen will not be affected by your formfactor selection:
        
**Width**
        
Replace:
```Max(App.Width, App.MinScreenWidth)```

by:
```Coalesce(vFormFactor.Width,Max(App.Width, App.MinScreenWidth))```

**Height**

Replace:        
```Max(App.Height, App.MinScreenHeight)```

by:
```Coalesce(vFormFactor.Height,Max(App.Height, App.MinScreenHeight))```

<img width="520" alt="sample_tablet_landscape" src="./assets/sample_tablet_landscape.png" />   
<img width="206" alt="sample_tablet_portrait.png" src="./assets/sample_tablet_portrait.png" />  
<img width="150" alt="phone_portrait.png" src="./assets/sample_phone_portrait.png" />  

## Code
 **[YAML-file](./source/formfactor.yaml)** 

 ## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/form-factor-selector" aria-hidden="true" />
