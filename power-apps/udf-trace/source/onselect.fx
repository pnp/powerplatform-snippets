udfTrace(
    DatePicker.SelectedDate,
    Slider.Value,
    ShowColumns(
        Filter(
            Gallery.AllItems,
            status = "Yes" // Replace status with your gallery property name
        ),
        title // Replace title with your gallery property name
    ),
    RadioGroup.SelectedItems,
    Dropdown.SelectedItems,
    Toggle.Checked,
    Rating.Value,
    Combobox.SelectedItems,
    Checkbox.Checked  
)