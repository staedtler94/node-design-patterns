## Inheritance with an Interface approach
Usually an interface is created to structure the expected object implementation to match a specific format.  
In our example using an Interface for Persons is inaccurate because from a real world application stand-point a person should be able to be instantiated independently.

```
// an interface for all staff members in the Hospitality industry
export interface IPerson {
    readonly name: string;
    readonly age: number;
    readonly gender?: string;

    readonly badgeNumber: string;
    readonly role: HOSPITALITY_ROLES;
}
```

It makes sense to create the Persons class instead of an interface. Because for every **Waiter is a Person** and **chef is a Person** relationships implying the need for an Inheritance the individual Person interface fields and attributes need to re-implemented for all inherited instances. This is duplication of work (breaks the DRY principle), more chances of bugs and problematic scenario on the implementation end. This will make unit testing more difficult, basically in conclusion it violates a lot of principles around clean code and inheritance.


### Improvements
To Begin with we can make the Persons as a Class which is implemented and then use that to extend other peculiar types of persons. This will make the code reduce duplicate methods and improve testing scope and accuracy.