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
* When prop **headers** is defined with a non-zero length array, the number of rows rendered for cell data would be 1 less than defined **rows** value.
    
    Example : 
    ```
    <CustomTable rows={3} columns={3} headers={['Header1','Header2','Header3']} />
    ``` 
    Above Example will render **1 row with headers for the table and 2 rows for the cell data**.

* When prop **headers** is defined with a non-zero length array, the prop **headers** array's length will be given higher priority over prop **columns** value

    
    Example : 
    ```
    <CustomTable rows={3} columns={2} headers={['Header1','Header2','Header3']} />
    ``` 
    Above Example will render **3 columns instead of 2** as the length of **headers** prop array is 2 .

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
Triggered when a editable cell value is changed

### Parameters
- value : Updated Value of the edited cell 
- rowIndex : Row Index of updated cell 
- columnIndex : Column index of updated cell


