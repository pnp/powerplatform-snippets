# Layout Pyramid

This is a simple snippet that can help you get started with creating a screen in canvas app. It is a set of containers with various number of columns. The first container has 1 column, the second container has 2 columns, the third container has 3 columns, and the fourth container has 4 columns.

## Authors

Snippet|Author(s)
--------|---------
Daniel Laskewitz | [GitHub](https://github.com/laskewitz) ([@Laskewitz](https://www.twitter.com/laskewitz) )

## Code

```yaml
- MainContainerPyramidScreen:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      Height: =Parent.Height
      LayoutAlignItems: =LayoutAlignItems.Stretch
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      LayoutMode: =LayoutMode.Auto
      Width: =Parent.Width
    Children:
    - Container1PyramidScreen:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          LayoutMode: =LayoutMode.Auto
    - Container2PyramidScreen:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          LayoutMode: =LayoutMode.Auto
        Children:
        - Container21PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container22PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
    - Container3PyramidScreen:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          LayoutMode: =LayoutMode.Auto
        Children:
        - Container31PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container32PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container33PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
    - Container4PyramidScreen:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          LayoutMode: =LayoutMode.Auto
        Children:
        - Container41PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container42PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container43PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
        - Container44PyramidScreen:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              LayoutMode: =LayoutMode.Auto
```

## Minimal path to awesome

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/pyramid.pa.yaml)** or copy the code from above.
1. Right click on the screen where you want to add the snippet and select "Paste YAML"
![View of the paste code button](./assets/pastecode.png)

This will add the containers to your screen and you can delete the containers you don't want to use.

![View of the pasted containers](./assets/pyramid.png)

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/layout-pyramid" aria-hidden="true" />
