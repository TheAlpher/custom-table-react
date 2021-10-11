# Custom Table React

## Introduction 

A react table component that accepts rows, columns, data, header details etc. and allows editing table cells and customise column widths

## **Getting Started**
You can install Custom Table React with NPM
```
npm install custom-table-react
```
Add the following statement in your file to import the component 
```
import { CustomTable } from 'custom-table-react'
```
#
## **props**
&nbsp;
&nbsp;

### **rows**
 No. of rows in the table
```
type: Number
Required: true
defaultValue: 2

Example : 
<CustomTable rows={4} columns={3} />
```
&nbsp;

### **columns**
No. of columns in the table
```
type: Number
Required: true
defaultValue: 2

Example : 
<CustomTable rows={3} columns={4} />
```
&nbsp;

### **editable**
Whether the table cells would be editable or not

**editable** set to true renders table data components (**td**) wrapping a full width **input** element width cell data as the value fo the input field
```
type: Boolean
Required : false
defaultValue: false


Example : 
<CustomTable rows={3} columns={3} editable={true} />
```

&nbsp;
### **data**
Data to be pushed in the table cells
```
type: Array  (2d Array of number/strings)
required: false
defaultValue : []

Example : 
<CustomTable rows={3} columns={3} data={[['cell1data' ,'cell2data','cell3data'], ['cell4',26,'cell6data'],[77,88,99]]} />
```
* When prop **data** is defined with a non-zero length array,
    - The **headers** prop length will be the columns value for table.
    - If **headers** prop is empty, The higher value between:
        - maximum **data** prop array element length 
        - **columns** prop
    
         will be the columns value for table

    - The higher value between :
        - **data** prop length  
        - **rows** prop

        will be the rows value for table

    
    Example : 
    ```
    <CustomTable rows={3} columns={3} data={[['cell1data' ,'cell2data','cell3data'], ['cell4',26,'cell6data'],[77,88,99],['cell10','cell11','cell12']]} />
    ``` 
    Above Example will render **4 columns instead of 3** as the length of **data** prop array is 4.

&nbsp;

### **headers**
Array of table column headings
```
type: Array (Array of strings/numbers)
required: false
defaultValue: []

Example : 
<CustomTable rows={3} columns={3} headers={['Header1','Header2','Header3']} />
```
* When prop **headers** is defined with a non-zero length array, the prop **headers** array's length will be given higher priority over prop **columns** value and maximum **data** prop array element length value.

    
    Example : 
    ```
    <CustomTable rows={3} columns={2} headers={['Header1','Header2','Header3']}  data={[['cell1data' ,'cell2data','cell3data',55], ['cell4',26,'cell6data',34,66]]}  />
    ``` 
    Above Example will render **3 columns instead of 2 or 5** as the length of **headers** prop array is 3.

&nbsp;

### **columnsWidth**
Array of width of each column in percentage
```
type: Array
required: false
defaultValue: []

Example : 
<CustomTable rows={3} columns={3} columnsWidth={[60,20,20]} />
```
### **tHeadStyles**
Style Object for table headings, applies to each **th** element in **thead**
```
type: Object
required: false
defaultValue : null
```
&nbsp;
#
## **events**
&nbsp;
&nbsp;
### **onChange**
Triggered when an editable cell value is changed

### Parameters
- value : Updated Value of the edited cell 
- rowIndex : Row Index of updated cell 
- columnIndex : Column index of updated cell


