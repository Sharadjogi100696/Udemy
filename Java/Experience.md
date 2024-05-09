- If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).

- `Math.pow(2,2)` // 4
- `Math.abs(-2)` // 2
- `Math.ceil(2.3)` // 3
- `Math.floor(2.3)` // 2
- `Math.max(2,3,4,5)` // 5
- `Math.min(2,3,4,5)` // 2
- `Math.sqrt(9)` // 3

- "\t" --> tab

- we can call the static functions without initialisation

```java
public static void display {}
```

```java
Scanner sc = new Scanner(System.in);
String s = sc.next();
```
