colColumnConfig = Table(
    {ColumnIdx: 10,  Column: "EmployeeName",   Width: 200},
    {ColumnIdx: 20,  Column: "Department",     Width: 160},
    {ColumnIdx: 30,  Column: "Shadow",         Width: 16},
    {ColumnIdx: 40,  Column: "DeviceType",     Width: 180},
    {ColumnIdx: 50,  Column: "Brand",          Width: 150},
    {ColumnIdx: 60,  Column: "Model",          Width: 200},
    {ColumnIdx: 70,  Column: "Location",       Width: 160},
    {ColumnIdx: 80,  Column: "OS",             Width: 160},
    {ColumnIdx: 90,  Column: "SerialNumber",   Width: 160},
    {ColumnIdx: 100, Column: "AssignedDate",   Width: 150},
    {ColumnIdx: 110, Column: "WarrantyExpiry", Width: 150},
    {ColumnIdx: 120, Column: "Condition",      Width: 140},
    {ColumnIdx: 130, Column: "Status",         Width: 140}
);

ColumnX(columnName: Text): Number = 
    With(
        {targetIdx: LookUp(colColumnConfig, Column = columnName, ColumnIdx)},
        Sum(Filter(colColumnConfig, ColumnIdx < targetIdx), Width)
    );

ColumnWidth(columnName: Text): Number = 
    LookUp(colColumnConfig, Column = columnName, Width);