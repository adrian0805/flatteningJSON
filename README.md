# flatteningJSON
This project is created for flattening JSON files. The output JSON file is flattened on multiple levels. ex of key-value output pair: "a.b.c.d" : 10.
For this solution I chose Node.js as a used technology, therefore you need node to run it.:
1)If you do not have it installed, please follow the instructions on this webpage to set this up: https://nodejs.org/en/download/ . 
2)In order to flatten a JSON file you need to add it inside main directory of the project, alongside main.js file.
3)Once you did that, please open your terminal, go to project folder and run this command: node main.js <your_json_file_name>. 
  The output JSON file will appear inside main project folder as this name: <your_json_file_name>Output.json
  It also works if you want to convert multiple files in the same time, for example: node main.js file1 file2. 
  Inside the project there are 4 json files: test1.json, test2.json, test3.json, test4.json. You can use those or add others.
  
Please do not delete test3 and test4 if you want to run tests. 
In order to run the tests you need to add dependecies files.
Follow these instructions: 
1) Go inside project folder.
2) Run node npm install - this command installs project dependecies, we need Jest library for tests.
3) After succefully installing it run npm test. There are 2 tests based on test3.json and test4.json files.
