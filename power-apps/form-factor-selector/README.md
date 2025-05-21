Form factor selection in editor

Allow you to change the form factor in edit mode, helping you to design responsive applications

<img width="216" alt="msedge_rcavLxE04h" src="./assets/formfactorselector.png" />

⚠️⚠️⚠️ Important:

        Set Gallery.Y to : -Self.Height 

        
        You need to replace for<b> every screen</b> properties, otherwise screen will not be affected by your formfactor selection :
        
        Width :
                Max(App.Width, App.MinScreenWidth)

                by :
                Coalesce(vFormFactor.Width,Max(App.Width, App.MinScreenWidth))
        Height :
                Max(App.Height, App.MinScreenHeight)

                by :
                Coalesce(vFormFactor.Height,Max(App.Height, App.MinScreenHeight))

<img width="520" alt="sample_tablet_landscape" src="./assets/sample_tablet_landscape.png" /><img width="206" alt="sample_tablet_portrait.png" src="./assets/sample_tablet_portrait.png" /><img width="150" alt="phone_portrait.png" src="./assets/sample_phone_portrait.png" />


