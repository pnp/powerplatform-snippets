Form factor selection in editor

Allow you to change the form factor in edit mode, helping you to design responsive applications

<img width="216" alt="msedge_rcavLxE04h" src="https://github.com/user-attachments/assets/662aaa82-d689-4e5a-af3c-151f2982cf2d" />

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

<img width="520" alt="msedge_C8uKxe3b91" src="https://github.com/user-attachments/assets/ea3433cc-39ad-4cfb-a85d-c1ee3c968003" /><img width="206" alt="msedge_el3tKoASLf" src="https://github.com/user-attachments/assets/de367c6d-2f3a-470e-9174-12b655d41c1c" /><img width="150" alt="msedge_hNNVOUPgOX" src="https://github.com/user-attachments/assets/7c2659d0-4943-46d7-a274-00f9f8137bd4" />


