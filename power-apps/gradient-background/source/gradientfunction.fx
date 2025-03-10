funcConvertRGBAColourToHexString(
    parRGBAColour:      Color
) : Text = (Mid(JSON(parRGBAColour), 2, 7));


typListOfColours:= Type(
    [Color]
);

funcGenerateHTMLForColourGradientBackground(
    parSelfHeight:                  Number,             //the height of the HTML control this text is being embedded in, i.e. Self.Height.
    parSelfWidth:                   Number,             //the width of the HTML control this text is being embedded in, i.e. Self.Width.
    parBorderRadiusOfBackground:    Number,             //this will give a radius to the coloured background. Value should be given in pixels.
    parPadding:                     Number,             //this will give some padding around the coloured background. Value should be given in pixels.
    parColoursForGradient:          typListOfColours,   //table of colours in RGBA format
    parGradientDirection:           Text                //possible values: "top", "left", "right", "bottom", and any combination of the above, e.g. "top right" or "bottom left"
) : Text = With(
    //Convert Power Apps Colours into Hex Strings
    {
        wthBackgroundColours:           ForAll(
            Sequence(CountRows(parColoursForGradient)),
            funcConvertRGBAColourToHexString(Index(parColoursForGradient, Value).Value)
        )
    },

    With(
        //Concat all colours into one string for the linear-gradient function
        {
            wthBackgroundColoursString:     Concat(wthBackgroundColours, Value, ",")
        },

        $"<div style='
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            height: {parSelfHeight - 1}px;
            width: {parSelfWidth}px;
        '>
            <div style='
                box-sizing: border-box;
                height: {parSelfHeight - parPadding - 1}px;
                width: {parSelfWidth - parPadding}px;
                border-radius: {parBorderRadiusOfBackground}px;
                background-color: {(First(wthBackgroundColours).Value)}; /*fallback*/
                background-image: linear-gradient(
                    to {parGradientDirection},
                    {wthBackgroundColoursString}
                );
            '>
                
            </div>
        </div>"
    )
);