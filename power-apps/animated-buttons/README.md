# Animated Canvas Buttons with CSS-style SVG Effects (YAML Snippet)

Bring your Canvas Power Apps to life with animated SVG buttons styled to mimic CSS hover and microinteraction effects. Use this reusable snippet to apply visual polish and responsiveness to buttons via declarative YAML.

## Authors

Snippet|Author(s)
--------|---------
Animated CSS SVG Button | [Felix Verduin](https://github.com/felixverduin) ([Hashnode](https://fsvtech.hashnode.dev/) / [LinkedIn](https://www.linkedin.com/in/felixverduin/))

## Minimal path to awesome

> **_NOTE:_** The recommended best practice is to utilize this YAML snippet inside of a canvas component for reusability.

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/AnimatedSVGButton.yaml)**
1. Right click on the screen where you want to add the snippet and select **Paste YAML**
![View of the paste code button](./assets/pastecode.png)

## Code

``` YAML
- cntButtons:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      Height: =100
      LayoutDirection: =LayoutDirection.Horizontal
      Width: =400
      X: =490
      Y: =81
    Children:
      - cntButton1:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.Center
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =100
            LayoutMinHeight: =65
            Width: =100
            X: =800
            Y: =555
          Children:
            - htmlButton1:
                Control: HtmlViewer@2.1.0
                Properties:
                  Height: =Parent.Height
                  HtmlText: |-
                    ="<div style='
                    margin:"& Self.Width * 0.14 &"px;
                    background:orange;
                    width:"& Self.Width * 0.7259595959 &"px; height: "&Self.Height * 0.7059595959 &"px;
                    box-shadow: "&
                    If(pressedbutton = false, 
                    "-2px -2px 4px rgba(255, 255, 255, .7), -2px -2px 1px rgba(255, 255, 255, .5), 2px 2px 2px rgba(255, 255, 255, .075), 2px 2px 4px rgba(0, 0, 0, .75)",
                    "inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .45)")
                    &"

                    ;border-radius:90px'>
                    </div>"
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Width: =Parent.Width
            - imgButton1:
                Control: Image@2.2.3
                Properties:
                  Height: =Parent.Height
                  HoverFill: =
                  Image: "=\"data:image/svg+xml;utf8,  \" & EncodeUrl(\"\r\n<svg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-list' viewBox='-6.5 -6 28 28'>\r\n   <style>\r\n  @keyframes animate {\r\n    from {\r\n      transform: translateY(0px);\r\n    }\r\n    to {\r\n      transform: translateY(\r\n        var(--bounce-offset)\r\n      );\r\n      fill: \"& \"#3A3B3C\" &\"  \r\n    }\r\n  }\r\n\r\n  .animate\"& varTimeStamp1 &\" {\r\n    animation:\r\n      \r\n      animate alternate 4;\r\n      cubic-bezier(.2, .65, .6, 1);\r\n      --bounce-offset: -5px;\r\n    animation-duration: 200ms;\r\n  }\r\n  \r\n</style>\r\n  <path class = 'animate\"& varTimeStamp1 &\"' d='M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5'/>\r\n</svg>\r\n\"\r\n)\r\n\r\n\r\n/*\r\n\"data:image/svg+xml;utf8,  \" & EncodeUrl(\"\r\n<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#FFFFFH' viewBox='-2 -2 20 20' style='animation: shake 1s infinite;'>\r\n  <style>\r\n    @keyframes shake {\r\n      0%, 100% { transform: translate3d(0, 0, 0); }\r\n      25% { transform: translate3d(-10px, 0, 0); }\r\n      50% { transform: translate3d(10px, 0, 0); }\r\n      75% { transform: translate3d(-10px, 0, 0); }\r\n    }\r\n</style>\r\n  <rect width='50' height='15' rx='6' fill='#5227CC'/>\r\n</svg>\r\n\")\r\n*/"
                  OnSelect: |-
                    =UpdateContext({locShowSettingsMenu: false});
                    UpdateContext({locShowSettingsMenu: true})
                  PaddingBottom: =10
                  PaddingLeft: =10
                  PaddingRight: =10
                  PaddingTop: =10
                  PressedFill: =ColorFade(RGBA(0, 0, 0, 0), -20%)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Width: =Parent.Width
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Height - Self.Height) / 2
            - btnButton1:
                Control: Classic/Button@2.2.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =RGBA(166, 166, 166, 1)
                  Fill: =RGBA(0, 0, 0, 0)
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height * 0.67
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =RGBA(196,196,196,0.2)
                  OnSelect: |-
                    =Concurrent(
                    Set(varTimeStamp1, Text(Now(), "")),
                    UpdateContext({pressedbutton: !pressedbutton}),
                    UpdateContext({pressedbutton2: false}),
                    UpdateContext({pressedbutton3: false}),
                    UpdateContext({pressedbutton4: false})
                        )
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =RGBA(196,196,196,0.4)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Text: =""
                  Width: =Parent.Width * 0.69
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Width - Self.Width) / 2
      - cntButton2:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.Center
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =100
            LayoutMinHeight: =65
            Width: =100
            X: =800
            Y: =555
          Children:
            - htmlButton2:
                Control: HtmlViewer@2.1.0
                Properties:
                  Height: =Parent.Height
                  HtmlText: |-
                    ="<div style='
                    margin:"& Self.Width * 0.14 &"px;
                    background:orange;
                    width:"& Self.Width * 0.7259595959 &"px; height: "&Self.Height * 0.7059595959 &"px;
                    box-shadow: "&
                    If(pressedbutton2 = false, 
                    "-2px -2px 4px rgba(255, 255, 255, .7), -2px -2px 1px rgba(255, 255, 255, .5), 2px 2px 2px rgba(255, 255, 255, .075), 2px 2px 4px rgba(0, 0, 0, .75)",
                    "inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .45)")
                    &"

                    ;border-radius:90px'>
                    </div>"
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Width: =Parent.Width
            - imgButton2:
                Control: Image@2.2.3
                Properties:
                  Height: =Parent.Height
                  HoverFill: =
                  Image: "=\"data:image/svg+xml;utf8,  \" & EncodeUrl(\"\r\n<svg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-list' viewBox='-6.5 -6 28 28'>\r\n   <style>\r\n   .animate\"& varTimeStamp2 &\" {\r\n    animation-name: shake;\r\n    animation-duration: 1.5s;\r\n    animation-fill-mode: both;\r\n  }\r\n  @keyframes shake {\r\n      0%, 100% { transform: translate3d(0, 0, 0); }\r\n      25% { transform: translate3d(-5px, 0, 0); fill: \"& \"#3A3B3C\" &\"  }\r\n      50% { transform: translate3d(5px, 0, 0); fill: red  }\r\n      75% { transform: translate3d(-5px, 0, 0); fill: \"& \"#3A3B3C\" &\"  }\r\n    }\r\n\r\n  \r\n  \r\n</style>\r\n  <path class = 'animate\"& varTimeStamp2 &\"' d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z'/>\r\n</svg>\r\n\"\r\n)\r\n\r\n\r\n/*\r\nstyle='animation: shake 1.5s infinite;'>\r\n  <style>\r\n    @keyframes shake {\r\n      0%, 100% { transform: translate3d(0, 0, 0); }\r\n      25% { transform: translate3d(-10px, 0, 0); }\r\n      50% { transform: translate3d(10px, 0, 0); }\r\n      75% { transform: translate3d(-10px, 0, 0); }\r\n    }\r\n  </style>\r\n*/"
                  OnSelect: |-
                    =UpdateContext({locShowSettingsMenu: false});
                    UpdateContext({locShowSettingsMenu: true})
                  PaddingBottom: =10
                  PaddingLeft: =10
                  PaddingRight: =10
                  PaddingTop: =10
                  PressedFill: =ColorFade(RGBA(0, 0, 0, 0), -20%)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Width: =Parent.Width
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Height - Self.Height) / 2
            - btnButton2:
                Control: Classic/Button@2.2.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =RGBA(166, 166, 166, 1)
                  Fill: =RGBA(0, 0, 0, 0)
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height * 0.67
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =RGBA(196,196,196,0.2)
                  OnSelect: |-
                    =Concurrent(
                    Set(varTimeStamp2, Text(Now(), "")),
                    UpdateContext({pressedbutton: false}),
                    UpdateContext({pressedbutton2: !pressedbutton2}),
                    UpdateContext({pressedbutton3: false}),
                    UpdateContext({pressedbutton4: false})
                        );

                    Set(NotificationHTML, "");
                    Set(
                        NotificationHTML,
                        "<div style='
                            background-color: #ff0000;
                            color: #FFFFFF;
                            padding: 10px;
                            border-radius: 5px;
                            border: 1px solid #ffeeba;
                            text-align: center;
                            position: relative;
                            opacity: 1;
                            font-size: 18px; /* Adjust font size as needed */
                            animation: fadeOut 3s linear forwards;
                        '>
                            ⚠️ Notification: You are not allowed to do this!
                        </div>"
                    );
                  PaddingBottom: =30
                  PaddingLeft: =30
                  PaddingRight: =30
                  PaddingTop: =30
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =RGBA(196,196,196,0.4)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Text: =""
                  Width: =Parent.Width * 0.69
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Width - Self.Width) / 2
      - cntButton3:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.Center
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =100
            LayoutMinHeight: =65
            Width: =100
            X: =800
            Y: =555
          Children:
            - htmlButton3:
                Control: HtmlViewer@2.1.0
                Properties:
                  Height: =Parent.Height
                  HtmlText: |-
                    ="<div style='
                    margin:"& Self.Width * 0.14 &"px;
                    background:orange;
                    width:"& Self.Width * 0.7259595959 &"px; height: "&Self.Height * 0.7059595959 &"px;
                    box-shadow: "&
                    If(pressedbutton3 = false, 
                    "-2px -2px 4px rgba(255, 255, 255, .7), -2px -2px 1px rgba(255, 255, 255, .5), 2px 2px 2px rgba(255, 255, 255, .075), 2px 2px 4px rgba(0, 0, 0, .75)",
                    "inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .45)")
                    &"

                    ;border-radius:90px'>
                    </div>"
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Width: =Parent.Width
            - imgButton3:
                Control: Image@2.2.3
                Properties:
                  Height: =Parent.Height
                  HoverFill: =
                  Image: |-
                    ="data:image/svg+xml;utf8,  " & EncodeUrl("
                    <svg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-list' viewBox='-6.5 -6 28 28'>
                       <style>
                       .animate"& varTimeStamp3 &" {
                        animation: animate 0.5s both; 
                        transform-origin: center;
                      }
                        @keyframes animate {
                          0%, 100% {
                            transform: scale(1);
                            opacity: 1;
                          }
                          50% {
                            transform: scale(1.15);
                            opacity: 0.8;
                            fill: "& "#3A3B3C" &"
                          }
                        }  
                    </style>
                        <path class = 'animate"& varTimeStamp3 &"' d='M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z'/>
                      <path class = 'animate"& varTimeStamp3 &"' d='M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z'/>
                    </svg>
                    "
                    )
                  OnSelect: |-
                    =UpdateContext({locShowSettingsMenu: false});
                    UpdateContext({locShowSettingsMenu: true})
                  PaddingBottom: =10
                  PaddingLeft: =10
                  PaddingRight: =10
                  PaddingTop: =10
                  PressedFill: =ColorFade(RGBA(0, 0, 0, 0), -20%)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Width: =Parent.Width
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Height - Self.Height) / 2
            - btnButton3:
                Control: Classic/Button@2.2.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =RGBA(166, 166, 166, 1)
                  Fill: =RGBA(0, 0, 0, 0)
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height * 0.67
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =RGBA(196,196,196,0.2)
                  OnSelect: |-
                    =Concurrent(
                    Set(varTimeStamp3, Text(Now(), "")),
                    UpdateContext({pressedbutton: false}),
                    UpdateContext({pressedbutton2: false}),
                    UpdateContext({pressedbutton3: !pressedbutton3}),
                    UpdateContext({pressedbutton4: false})
                        )
                  PaddingBottom: =30
                  PaddingLeft: =30
                  PaddingRight: =30
                  PaddingTop: =30
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =RGBA(196,196,196,0.4)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Text: =""
                  Width: =Parent.Width * 0.69
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Width - Self.Width) / 2
      - cntButton4:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.Center
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =100
            LayoutMinHeight: =65
            Width: =100
            X: =800
            Y: =555
          Children:
            - htmlButton4:
                Control: HtmlViewer@2.1.0
                Properties:
                  Height: =Parent.Height
                  HtmlText: |-
                    ="<div style='
                    margin:"& Self.Width * 0.14 &"px;
                    background:orange;
                    width:"& Self.Width * 0.7259595959 &"px; height: "&Self.Height * 0.7059595959 &"px;
                    box-shadow: "&
                    If(pressedbutton4 = false, 
                    "-2px -2px 4px rgba(255, 255, 255, .7), -2px -2px 1px rgba(255, 255, 255, .5), 2px 2px 2px rgba(255, 255, 255, .075), 2px 2px 4px rgba(0, 0, 0, .75)",
                    "inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .45)")
                    &"

                    ;border-radius:90px'>
                    </div>"
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Width: =Parent.Width
            - imgButton4:
                Control: Image@2.2.3
                Properties:
                  Height: =Parent.Height
                  HoverFill: =
                  Image: |-
                    ="data:image/svg+xml;utf8,  " & EncodeUrl("
                    <svg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-list' viewBox='-6.5 -6 28 28'>
                       <style>
                       .animate"& varTimeStamp4 &" {
                        animation:
                        fill 2s both;
                      }
                      @keyframes fill {
                          0% {
                            fill: green;
                          }
                          50% {
                            fill: green; /* Or any color of your choice */
                          }
                          100% {
                            fill: white; /* Icon reaches full color */
                          }
                        }
                    </style>
                    <path class = 'animate"& varTimeStamp4 &"' d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5'/>
                      <path class = 'animate"& varTimeStamp4 &"' d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z'/>
                    </svg>
                    "
                    )
                  OnSelect: |-
                    =UpdateContext({locShowSettingsMenu: false});
                    UpdateContext({locShowSettingsMenu: true})
                  PaddingBottom: =10
                  PaddingLeft: =10
                  PaddingRight: =10
                  PaddingTop: =10
                  PressedFill: =ColorFade(RGBA(0, 0, 0, 0), -20%)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Width: =Parent.Width
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Height - Self.Height) / 2
            - btnButton4:
                Control: Classic/Button@2.2.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =RGBA(166, 166, 166, 1)
                  Fill: =RGBA(0, 0, 0, 0)
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height * 0.67
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =RGBA(196,196,196,0.2)
                  OnSelect: |-
                    =Concurrent(
                    Set(varTimeStamp4, Text(Now(), "")),
                    UpdateContext({pressedbutton: false}),
                    UpdateContext({pressedbutton2: false}),
                    UpdateContext({pressedbutton3: false}),
                    UpdateContext({pressedbutton4: !pressedbutton4})
                        );

                        Set(NotificationHTML, "");
                    Set(
                        NotificationHTML,
                        "<div style='
                            background-color: #008000;
                            color: #FFFFFF;
                            padding: 10px;
                            border-radius: 5px;
                            border: 1px solid #ffeeba;
                            text-align: center;
                            position: relative;
                            opacity: 1;
                            font-size: 18px; /* Adjust font size as needed */
                            animation: fadeOut 3s linear forwards;
                        '>
                            ⚠️ Notification: You have turned this functionality on!
                        </div>"
                    );
                  PaddingBottom: =30
                  PaddingLeft: =30
                  PaddingRight: =30
                  PaddingTop: =30
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =RGBA(196,196,196,0.4)
                  RadiusBottomLeft: =100
                  RadiusBottomRight: =100
                  RadiusTopLeft: =100
                  RadiusTopRight: =100
                  Text: =""
                  Width: =Parent.Width * 0.69
                  X: =(Parent.Width - Self.Width) / 2
                  Y: =(Parent.Width - Self.Width) / 2
```

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/animated-css-svg-button" aria-hidden="true" />
