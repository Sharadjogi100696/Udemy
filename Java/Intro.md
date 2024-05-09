# Java

## first program

```java
// MainClass.java

class MainClass {
    public static void main(String args[])
    {
        System.out.println("Hello World!!");
    }
}
```

```bash
// creates a class file, MainClass.class
javac MainClass.java
```

```bash
// runs the class file in the terminal
java MainClass.class
```

## Variables:

- int
- float
- char
- double
- String

## How to take input:

```java
import java.util.Scanner;

class apples {
	public static void main(String args[]) {
		Scanner x = new Scanner(System.in);
		System.out.println(x.nextLine());
	}
}
```

- `nextLine()` is for string
- `nextDouble()` is for double

## Calculator

```java
public static void main(String args[]) {
		double f,s,a;
		Scanner scan = new Scanner(System.in);
		f = scan.nextDouble();
		s = scan.nextDouble();
		a = f + s;
		System.out.println(a);
	}
```

## Assignment Operators

```
x += 10;
x *= 10;
x -= 10;
x /= 10;
x++
x--
--x
++x
```

## do while

```java
do {}while(condition)
```

## Random Number

```java
import java.util.Random;


	Random dice = new Random();
	System.out.println(dice.nextInt(6));
```

## Array

```java
int x[] = new int[10];
int x[] = {1,2,3,4,5,6};

```

## Enhanced for loop

```java
int arr[] = {1,2,3,4,5}

for(int x: arr) {
	x // 1,2,3,4,5
}

```

## passing array in the function

```java
pubic void foo(int ar[]) {
	...
}

int arr[] = {1,2,3,4,5}

foo(arr);
```

## multi dimensional array

```java
int x[][] = {{1,2}, {2,3}, {4,5}}
```

## pass multiple arguments to the function

```java
// x will be treated as array
public void foo(int...x){
for(int y:x) {}
}
```

## decimeal places:

```java
System.out.printf("%02d", x);
```

## Notes:

- javac always looks for main method to start
