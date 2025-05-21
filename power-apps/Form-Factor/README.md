Form factor selection in editor

Allow you to change the form factor in edit mode, helping you to design responsive applications

<img width="216" alt="msedge_rcavLxE04h" src="https://github.com/user-attachments/assets/662aaa82-d689-4e5a-af3c-151f2982cf2d" />


        Set Gallery.Y to : -Self.Height 

        
        Replace in every screen :
        Width :
                Max(App.Width; App.MinScreenWidth)

                by :
                Coalesce(vFormFactor.Width;Max(App.Width; App.MinScreenWidth)) 
        Height :
                Max(App.Height; App.MinScreenHeight)

                by :
                Coalesce(vFormFactor.Height;Max(App.Height; App.MinScreenHeight))
