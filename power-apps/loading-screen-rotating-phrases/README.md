# Loading Screen with Rotating Phrases

A loading screen featuring the animated Power Platform logo and a rotating set of loading phrases. Phrases slide in and out with a smooth animation and fade effect.

![Loading screen with rotating phrases](./assets/loading-screen-rotating-phrases.gif)

## Features

- Animated Power Platform logo with a floating up/down motion
- Slide-in / slide-out X-axis animation controlled by a user defined function
- White fade-in / fade-out controlled by a user defined function

## Authors

Snippet|Author
--------|-------
Loading Screen with Rotating Phrases | [Ateina](https://github.com/Ateina)

## Minimal path to awesome

1. Open your canvas app in **Power Apps**
2. Copy the contents of **[loading-screen-rotating-phrases.fx](./source/loading-screen-rotating-phrases.fx)** and paste them into your **App > Formulas** property
3. Copy the contents of **[loading-screen-rotating-phrases.yaml](./source/loading-screen-rotating-phrases.yaml)**
4. Right-click the screen where you want to add this and select **Paste code**
5. Set screen's onVisible property to `tmrLoadingPhrase.Start`
6. Switch to **Play mode** to see the animation — it does not run in Studio mode

## Code

- [loading-screen-rotating-phrases.fx](./source/loading-screen-rotating-phrases.fx): named formulas and user defined functions (`udfGetLoadingPhrase`, `udfMoveX`, `udfFadeWhiteInOut`, `nfLoadingPhrases`, `nfLogo`)
- [loading-screen-rotating-phrases.yaml](./source/loading-screen-rotating-phrases.yaml): container and controls

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/loading-screen-rotating-phrases" aria-hidden="true" />
