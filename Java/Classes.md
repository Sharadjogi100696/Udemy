# Class

```java
class A {
    public void sayHi() {
        System.out.println("hi!");
    }
}

class B {
    public static void main(String args[]) {
        A aOne = new A();
        A.sayHi();
    }
}
```

## params

```java
public void sayHi(String name) {}
```

## Formatted Output

```java
System.out.printf("Hi %s\n", "Sharad");
System.out.printf("Hi %d\n", 10);
System.out.printf("Hi %f\n", 10.001);
```

## private

```java
class A {
    private String name;
}
```

## Constructor

- initialize the class

```java
class A {
    private String name;

    public A(String n) {
        name = n;
    }
}
```

