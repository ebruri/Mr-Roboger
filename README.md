# Mr. Roboger's Neighborhood

#### By Ebru Rice

#### A a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with some fun substitutions "Beep! Boop!"

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

Mr. Roboger's Neighborhood takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"

## Specs

Describe: beepBoop()
```
Test: "It should return an array with 1 through to inputted N"
Code: beepBoop(3);
Expected Output: 0, 1, 2, 3
```

```
Test: "It should replace numbers that contain 3 with "Won't you be my friend"
Code: beepBoop(3);
Expected Output: 0, 1, 2, "Won't you be my friend"
```

```
Test: "It should replace numbers that contsin 2 with "Boop"
Code: beepBoop(2);
Expected Output: 0, 1, "Boop"
```

```
Test: 
Code: beepBoop();
Expected Output: 
```

## GitHub Pages

[Click here](https://ebruri.github.io/Programming-Language-Suggester/) to check it out in GitHub pages.

## Setup/Installation Requirements

* Open Terminal
* Change the current working directory to the location where you want the cloned directory.
* Type $ git clone https://github.com/ebruri/Programming-Language-Suggester
* Press enter to create your local clone.

## Known Bugs

* No known bugs at this time

## License

You are welcome to contribute to the code. You can also contact me with any questions.

Copyright (c) 2021 Ebru Rice

Licensed under the [MIT license](license.txt)