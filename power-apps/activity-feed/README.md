\# Upload File

Displays a real-time feed of activities such as posts, comments, status updates. Great for collaboration and keeping users informed.



!\[Upload File](./assets/activityfeed.gif)



\## Authors



Snippet|Author

--------|---------

Summit Bajracharya | \[GitHub](https://github.com/summitbaj) (\[@summitbajracharya](https://www.linkedin.com/in/summitbajracharya) )



\## Minimal path to awesome



1\. Open your canvas app in \*\*Power Apps\*\*

2\. Copy the contents of the \*\*\[YAML-file](./source/activityfeed.yaml)\*\* 

3\. Click on the three dots of the screen where you want to add the snippet and select "Paste code"



\## Code



``` YAML

\- conTimelineMain:

&nbsp;   Control: GroupContainer@1.3.0

&nbsp;   Variant: AutoLayout

&nbsp;   Properties:

&nbsp;     Fill: =RGBA(255, 255, 255, 1)

&nbsp;     Height: =353

&nbsp;     LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;     LayoutDirection: =LayoutDirection.Vertical

&nbsp;     PaddingBottom: =8

&nbsp;     PaddingLeft: =8

&nbsp;     PaddingRight: =8

&nbsp;     PaddingTop: =8

&nbsp;     X: =60

&nbsp;     Y: =60

&nbsp;   Children:

&nbsp;     - conTimelineHeader:

&nbsp;         Control: GroupContainer@1.3.0

&nbsp;         Variant: AutoLayout

&nbsp;         Properties:

&nbsp;           DropShadow: =DropShadow.None

&nbsp;           FillPortions: =0

&nbsp;           Height: =30

&nbsp;           LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;           LayoutDirection: =LayoutDirection.Horizontal

&nbsp;           LayoutMaxHeight: =0

&nbsp;           LayoutMaxWidth: =0

&nbsp;           LayoutMinHeight: =16

&nbsp;           LayoutMinWidth: =16

&nbsp;         Children:

&nbsp;           - Label2:

&nbsp;               Control: Label@2.5.1

&nbsp;               Properties:

&nbsp;                 AlignInContainer: =AlignInContainer.Start

&nbsp;                 BorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                 BorderStyle: =BorderStyle.None

&nbsp;                 BorderThickness: =2

&nbsp;                 Color: =RGBA(50, 49, 48, 1)

&nbsp;                 DisabledBorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                 DisabledColor: =RGBA(161, 159, 157, 1)

&nbsp;                 FocusedBorderThickness: =4

&nbsp;                 Font: =Font.'Segoe UI'

&nbsp;                 Height: =30

&nbsp;                 LayoutMaxHeight: =0

&nbsp;                 LayoutMaxWidth: =0

&nbsp;                 LayoutMinHeight: =16

&nbsp;                 LayoutMinWidth: =16

&nbsp;                 Text: ="Activity"

&nbsp;                 Width: =70

&nbsp;           - Rectangle2\_1:

&nbsp;               Control: Rectangle@2.3.0

&nbsp;               Properties:

&nbsp;                 BorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                 BorderStyle: =BorderStyle.None

&nbsp;                 BorderThickness: =2

&nbsp;                 DisabledFill: =RGBA(161, 159, 157, 1)

&nbsp;                 Fill: =RGBA(240, 240, 240, 1)

&nbsp;                 FillPortions: =1

&nbsp;                 FocusedBorderThickness: =4

&nbsp;                 Height: =2

&nbsp;                 HoverFill: =RGBA(0, 120, 212, 1)

&nbsp;                 LayoutMaxHeight: =0

&nbsp;                 LayoutMaxWidth: =0

&nbsp;                 LayoutMinHeight: =16

&nbsp;                 LayoutMinWidth: =5

&nbsp;                 PressedFill: =RGBA(0, 120, 212, 1)

&nbsp;                 Width: =5

&nbsp;     - galTimeline:

&nbsp;         Control: Gallery@2.15.0

&nbsp;         Variant: BrowseLayout\_Vertical\_ThreeTextVariant\_ver5.0

&nbsp;         Properties:

&nbsp;           BorderColor: =RGBA(245, 245, 245, 1)

&nbsp;           Items: =Sort(colActivity,Date,SortOrder.Descending)

&nbsp;           TemplateSize: =80

&nbsp;           X: =40

&nbsp;           Y: =40

&nbsp;         Children:

&nbsp;           - conGalContainer:

&nbsp;               Control: GroupContainer@1.3.0

&nbsp;               Variant: AutoLayout

&nbsp;               Properties:

&nbsp;                 DropShadow: =DropShadow.None

&nbsp;                 Height: =80

&nbsp;                 LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;                 LayoutDirection: =LayoutDirection.Horizontal

&nbsp;                 Width: =Parent.Width

&nbsp;               Children:

&nbsp;                 - conGalNextArrow:

&nbsp;                     Control: Classic/Icon@2.5.0

&nbsp;                     Properties:

&nbsp;                       AccessibleLabel: =Self.Tooltip

&nbsp;                       AlignInContainer: =AlignInContainer.Start

&nbsp;                       BorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                       Color: =RGBA(166, 166, 166, 1)

&nbsp;                       DisabledBorderColor: =RGBA(245, 245, 245, 1)

&nbsp;                       DisabledColor: =RGBA(225, 223, 221, 1)

&nbsp;                       DisabledFill: =RGBA(0, 0, 0, 0)

&nbsp;                       FocusedBorderThickness: =4

&nbsp;                       Height: =30

&nbsp;                       HoverBorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                       HoverColor: =RGBA(16, 110, 190, 1)

&nbsp;                       HoverFill: =RGBA(0, 0, 0, 0)

&nbsp;                       Icon: =Icon.ChevronRight

&nbsp;                       PaddingBottom: =5

&nbsp;                       PaddingLeft: =5

&nbsp;                       PaddingRight: =5

&nbsp;                       PaddingTop: =5

&nbsp;                       PressedBorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                       PressedColor: =RGBA(16, 110, 190, 1)

&nbsp;                       PressedFill: =RGBA(0, 0, 0, 0)

&nbsp;                       Tooltip: ="View item details"

&nbsp;                       Width: =30

&nbsp;                       Y: =33

&nbsp;                 - conGalSeperator:

&nbsp;                     Control: GroupContainer@1.3.0

&nbsp;                     Variant: AutoLayout

&nbsp;                     Properties:

&nbsp;                       DropShadow: =DropShadow.None

&nbsp;                       FillPortions: =0

&nbsp;                       LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;                       LayoutDirection: =LayoutDirection.Vertical

&nbsp;                       LayoutMaxHeight: =0

&nbsp;                       LayoutMaxWidth: =0

&nbsp;                       LayoutMinHeight: =16

&nbsp;                       LayoutMinWidth: =16

&nbsp;                       Width: =30

&nbsp;                     Children:

&nbsp;                       - conGalIcon:

&nbsp;                           Control: GroupContainer@1.3.0

&nbsp;                           Variant: AutoLayout

&nbsp;                           Properties:

&nbsp;                             AlignInContainer: =AlignInContainer.Start

&nbsp;                             Fill: =RGBA(54, 176, 75, 1)

&nbsp;                             FillPortions: =0

&nbsp;                             Height: =30

&nbsp;                             LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;                             LayoutDirection: =LayoutDirection.Vertical

&nbsp;                             LayoutMaxHeight: =0

&nbsp;                             LayoutMaxWidth: =0

&nbsp;                             LayoutMinHeight: =16

&nbsp;                             LayoutMinWidth: =16

&nbsp;                             PaddingBottom: =8

&nbsp;                             PaddingLeft: =8

&nbsp;                             PaddingRight: =8

&nbsp;                             PaddingTop: =8

&nbsp;                             Width: =30

&nbsp;                           Children:

&nbsp;                             - Icon1:

&nbsp;                                 Control: Classic/Icon@2.5.0

&nbsp;                                 Properties:

&nbsp;                                   BorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                                   Color: =RGBA(255, 255, 255, 1)

&nbsp;                                   DisabledBorderColor: =RGBA(245, 245, 245, 1)

&nbsp;                                   DisabledColor: =RGBA(225, 223, 221, 1)

&nbsp;                                   DisabledFill: =RGBA(0, 0, 0, 0)

&nbsp;                                   FocusedBorderThickness: =4

&nbsp;                                   Height: =14

&nbsp;                                   HoverBorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                                   HoverColor: =RGBA(16, 110, 190, 1)

&nbsp;                                   HoverFill: =RGBA(0, 0, 0, 0)

&nbsp;                                   Icon: =Icon.CalendarBlank

&nbsp;                                   LayoutMaxHeight: =0

&nbsp;                                   LayoutMaxWidth: =0

&nbsp;                                   LayoutMinHeight: =16

&nbsp;                                   LayoutMinWidth: =16

&nbsp;                                   PressedBorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                                   PressedColor: =RGBA(16, 110, 190, 1)

&nbsp;                                   PressedFill: =RGBA(0, 0, 0, 0)

&nbsp;                                   Width: =14

&nbsp;                       - conGalRect:

&nbsp;                           Control: Rectangle@2.3.0

&nbsp;                           Properties:

&nbsp;                             BorderColor: =RGBA(0, 0, 0, 0)

&nbsp;                             BorderStyle: =BorderStyle.None

&nbsp;                             BorderThickness: =2

&nbsp;                             DisabledFill: =RGBA(161, 159, 157, 1)

&nbsp;                             Fill: =RGBA(54, 176, 75, 1)

&nbsp;                             FillPortions: =1

&nbsp;                             FocusedBorderThickness: =4

&nbsp;                             Height: =10

&nbsp;                             HoverFill: =RGBA(0, 120, 212, 1)

&nbsp;                             LayoutMaxHeight: =0

&nbsp;                             LayoutMaxWidth: =0

&nbsp;                             LayoutMinHeight: =16

&nbsp;                             LayoutMinWidth: =16

&nbsp;                             PressedFill: =RGBA(0, 120, 212, 1)

&nbsp;                             Width: =5

&nbsp;                 - conGalContent:

&nbsp;                     Control: GroupContainer@1.3.0

&nbsp;                     Variant: AutoLayout

&nbsp;                     Properties:

&nbsp;                       DropShadow: =DropShadow.None

&nbsp;                       LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;                       LayoutDirection: =LayoutDirection.Vertical

&nbsp;                       LayoutMaxHeight: =0

&nbsp;                       LayoutMaxWidth: =0

&nbsp;                       LayoutMinHeight: =16

&nbsp;                       LayoutMinWidth: =16

&nbsp;                       PaddingBottom: =8

&nbsp;                       PaddingLeft: =15

&nbsp;                       PaddingRight: =8

&nbsp;                       PaddingTop: =8

&nbsp;                     Children:

&nbsp;                       - conGalTimelineHeader:

&nbsp;                           Control: GroupContainer@1.3.0

&nbsp;                           Variant: AutoLayout

&nbsp;                           Properties:

&nbsp;                             DropShadow: =DropShadow.None

&nbsp;                             LayoutAlignItems: =LayoutAlignItems.Center

&nbsp;                             LayoutDirection: =LayoutDirection.Horizontal

&nbsp;                             LayoutMaxHeight: =0

&nbsp;                             LayoutMaxWidth: =0

&nbsp;                             LayoutMinHeight: =16

&nbsp;                             LayoutMinWidth: =16

&nbsp;                           Children:

&nbsp;                             - conGalTimelineTitle:

&nbsp;                                 Control: Label@2.5.1

&nbsp;                                 Properties:

&nbsp;                                   AlignInContainer: =AlignInContainer.Start

&nbsp;                                   BorderColor: =RGBA(0, 0, 0, 1)

&nbsp;                                   Color: =RGBA(39, 113, 194, 1)

&nbsp;                                   DisabledColor: =RGBA(161, 159, 157, 1)

&nbsp;                                   FillPortions: =1

&nbsp;                                   Font: =Font.'Segoe UI'

&nbsp;                                   FontWeight: =FontWeight.Semibold

&nbsp;                                   Height: =27

&nbsp;                                   PaddingBottom: =0

&nbsp;                                   PaddingLeft: =0

&nbsp;                                   PaddingRight: =0

&nbsp;                                   PaddingTop: =0

&nbsp;                                   Size: =12

&nbsp;                                   Text: =ThisItem.Name

&nbsp;                                   VerticalAlign: =VerticalAlign.Top

&nbsp;                                   Width: =295

&nbsp;                                   X: =50

&nbsp;                                   Y: =47

&nbsp;                             - conGalTimelineDate:

&nbsp;                                 Control: Label@2.5.1

&nbsp;                                 Properties:

&nbsp;                                   AlignInContainer: =AlignInContainer.Start

&nbsp;                                   BorderColor: =RGBA(0, 0, 0, 1)

&nbsp;                                   Color: =RGBA(50, 49, 48, 1)

&nbsp;                                   DisabledColor: =RGBA(161, 159, 157, 1)

&nbsp;                                   Font: =Font.'Segoe UI'

&nbsp;                                   Height: =26

&nbsp;                                   PaddingBottom: =0

&nbsp;                                   PaddingLeft: =12

&nbsp;                                   PaddingRight: =0

&nbsp;                                   PaddingTop: =0

&nbsp;                                   Size: =10

&nbsp;                                   Text: =ThisItem.Date

&nbsp;                                   VerticalAlign: =VerticalAlign.Top

&nbsp;                                   Width: =117

&nbsp;                                   X: =436

&nbsp;                                   Y: =24

&nbsp;                       - htmGalTimelineContent:

&nbsp;                           Control: HtmlViewer@2.1.0

&nbsp;                           Properties:

&nbsp;                             AlignInContainer: =AlignInContainer.Stretch

&nbsp;                             DisabledBorderColor: =RGBA(161, 159, 157, 1)

&nbsp;                             Font: =Font.'Segoe UI'

&nbsp;                             HtmlText: =ThisItem.Details

&nbsp;                             LayoutMaxHeight: =0

&nbsp;                             LayoutMaxWidth: =0

&nbsp;                             LayoutMinHeight: =16

&nbsp;                             LayoutMinWidth: =16

&nbsp;                             PaddingBottom: =0

&nbsp;                             PaddingLeft: =0

&nbsp;                             PaddingRight: =0

&nbsp;                             PaddingTop: =0

&nbsp;                             Size: =10



```

\## Disclaimer



\*\*THIS CODE IS PROVIDED \*AS IS\* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.\*\*











