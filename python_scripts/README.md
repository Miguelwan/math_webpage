# html-template-changer


## Introduction
This is a simple script in python to make modifications on html files of a webpage. The script was made under the assumption that all the html files to modify have the same structure (same id markers, tag paths, etc).


## How it works

### Setting up
The script uses the packeges beautifullsoup and pandas between others, the packages requiered to run the script can be foundin requirements.txt, these packages should be installed before running the script.
The html files that will be modified must be in the same folder as the script, also the file webpages.csv.
The file webpages.csv must contain the name of the html files that will be modify, in the column "webpage".

### Running the scrip
The script starts with a main menu with three options:

-*Inspect html file*

-*Modify template*

-*Exit*

The option **Inspect html file** is design to inspect the template and do the correct selction by tag, id, and/or attribute. Also it will allow to preview the changes on the file index.html. This menu is for selection and preview only, no change is saved in this option.

The option **Modify template** is desing to applied the selected changes from *Inspect html file* to all the files listed in webpages.csv.

### Inspect html file
You will be asked to enter the name of the file that you would like to inspect.
The option **Inspect html file** contains the following options:

-*Print ------.html* (------.html is the file to inspect)

-*Select id*

-*Select tag*

-*Select attribute*

-*Show selector*

-*Show selected content*

-*Change content*

-*Reset changes*

-*Reset selection*

-*Return to main menu*

**Print ------.html:** This option allows you to print the code of ------.html with the temporary changes made. The idea is to obtain a preview of the code with the changes.

**Select id:** This options allows you to select a tag via an id. The scripts assume a good paxis, each id is related  to only one element.

**Select tag:** This option allows you to select different tags. It can be use to select the correct path for the changes. 

**Select attribute:** This options allows you to select attributes such as *src*, *alt*, *string*, etc.

**Show selection:** This option allows you to see the path for your selection.

**Show selected content:** This option allows you to see the content of your selection.

**Change content:** In this options you can enter the new information in the html file. Be sure to have the right selection, the selection must have an attribute. No tags can be added, modifications can be only made on the content of strings or attributs. To make more than one change, you will need to make the changes one by one first selecting them in *Inspect html file* and applying them in  *Modify template*.

**Reset changes:** In case you are not satisfied with the preview, you can reset the preview.

**Reset selection:** In case there is a mistake with the path or selection, you can reset the selection/path.

**Return to main menu:** Before returning to the main menu, check that the desire changes are correct and the selection is also correct. By using *Print ------.html* you can check that the changes are the desire ones, use *Show selection* to check that the path for the changes is correct.

### Modify template
In this menu the changes previewed in Inspect html file can be applied to the template in all the files.
The option **Modify template** contains the following options:

**Load webpages list:** In this option you can load the list of files to change.

**Modify webpages:** After loading the list of file  to change, you can applied the changes with this option.

**Return to main menu:** Remember to apply the changes before leaving to the main menu.


## Example
For an example on how to use the script, make a copy of the script in the folder **tutorial**, open index.html in your browser, and follow the tutorial.
