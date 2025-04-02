nfToggleOn = "Reserve a parking space along with the workspace";
nfToggleOff = "Parking space not required";

tpGalleryInputTable := Type([{title: Text}]); // Replace title with your gallery property name

tpGeneralInputTable := Type([{Value: Text}]);

udfTrace(
    datePicker: Date,
    slider: Number,
    galleryItems: tpGalleryInputTable,
    radio: tpGeneralInputTable,
    dropdown: tpGeneralInputTable,
    toggle: Boolean,
    rating: Number,
    combobox: tpGeneralInputTable,
    checkbox: Text
):Boolean =
{
    With(
        {
            // Transform Gallery Items into JSON
            wthGalleryItemsJsonOutput:
            Concat(
                ForAll(
                    Sequence(CountRows(galleryItems)),
                    {
                        tempRowIndex: Value - 1,
                        tempTitle: Last(FirstN(galleryItems, Value)).title // Replace title with your gallery property name
                    }
                ),
                """" & Text(tempRowIndex) & """:""" & Substitute(tempTitle, """", "\""") & """",
                ","
            ),

            // Transform Gallery Items into String
            wthGalleryItemsString:
            Concat(galleryItems,title,", "), // Replace title with your gallery property name

            // Transform Combobox Items into JSON
            wthComboboxItemsJsonOutput:
            Concat(
                ForAll(
                    Sequence(CountRows(combobox)),
                    {
                        tempRowIndex: Value - 1,
                        tempTitle: Last(FirstN(combobox, Value)).Value
                    }
                ),
                """" & Text(tempRowIndex) & """:""" & Substitute(tempTitle, """", "\""") & """",
                ","
            ),

            // Transform Combobox Items into String
            wthComboboxItemsString:
            Concat(combobox,Value,", ")
        },
        Trace(
            "udf_trace_demo",
            TraceSeverity.Information,
            {
                datePicker: Text(DateValue(datePicker), DateTimeFormat.ShortDate),
                slider: slider,
                gallery_items_record: "{" & wthGalleryItemsJsonOutput & "}",
                gallery_items_string: wthGalleryItemsString,
                radio: Text(First(radio).Value),
                dropdown: Text(First(dropdown).Value),
                toggle: If(
                    toggle,
                    nfToggleOn,
                    nfToggleOff
                ),
                rating: rating,
                combobox_record: "{" & wthComboboxItemsJsonOutput & "}",
                combobox_string: wthComboboxItemsString,
                checkbox: checkbox  
            }
        )
    )
};

udfTraceError(
    screen: Text,
    button: Text 
):Void =
{
    Trace(
        "udf_trace_onError",
        TraceSeverity.Error,
        {
            screen: screen,
            button: button  
        }
    )
};