# Power Apps (YAML) Snippet

This snippet is designed to have the possibility for a star rating inside a gallery. Default is 1 star up to 5 stars. If you want to have more or less stars, simply increase or decrease the amount of items in the gallery.

## Authors

Markus Franz

Snippet|Author(s)
--------|---------
Star rating gallery| [mmbr1606](https://github.com/mmbr1606) 

## Minimal path to awesome

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/minesweeper.yaml)** 
1. Click on the three dots of the screen where you want to add the snippet and select "Paste code"


## Code

Screens:
  Screen1:
    Properties:
      LoadingSpinnerColor: =RGBA(56, 96, 178, 1)
      OnVisible: |+
        =Set(SelectedRating, 0)
    Children:
      - Gallery1:
          Control: Gallery@2.15.0
          Variant: BrowseLayout_Horizontal_TwoTextOneImageVariant_ver5.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            Items: =[1,2,3,4,5]
            TemplateSize: =125
            Width: =897
            X: =40
            Y: =40
          Children:
            - Star1:
                Control: Star@2.4.0
                Variant: 5Points
                Properties:
                  BorderColor: =RGBA(56, 96, 178, 1)
                  Fill: =If(ThisItem.Value<=SelectedRating,Color.Yellow,Color.DimGrey)
                  OnSelect: |+
                    =Set(SelectedRating, ThisItem.Value)
                  X: =40
                  Y: =40


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**




<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/star-rating" aria-hidden="true"

