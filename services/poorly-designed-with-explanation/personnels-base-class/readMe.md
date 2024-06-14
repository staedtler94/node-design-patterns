### Person as a Class Approach
Now in this case we have created the Person as a class and implemented methods.  

This approach is much better than the Person's as an interface since we have upheld the DRY principle. The testing will be much easier since we have consolidated code only in the base class. And if we need to extend some of the base functionality we can write a method in the child class and let it handle it.  
For example, our hospitality staff Waiter needs to improve his greeting to please the customer and make them comfortable and we easily extended the staffs performance by adding the method in the child class. 

### Strong Points
- DRY (Do not Repeat Yourself)
- Open-Close Principles
- Less Code implies Less Bugs
- Better unit testing
- Good Maintainability

If you were to add another staff persona example, Security Guards, then we need to add a new class and inherit it from Persons class. We also will need to understand what methods are specific to Guard's only. A good example of inheritance is when we can answer like A Waiter **is a** Person type relationship. 

If the requirements is to have different roles that are solidified and never change in the Person's life-time then this use-case is met and a solution has been delivered but, but, but...

### Short-comings
But now if we take a step back and think from a real world scenario a waiter and a chef personas will have to stay waiter and chefs for the entirety of their life-time. They have been branded into a form of the child class (waiter for example) and cannot move into any other personas. In the real-world they can possibly move into becoming a Manager or Chefs or something else completely. Simply put a staff is not born as waiter but as a person who up-skills (or acquires the skills) to be a Waiter / Chef / Manager etc.  

So our abstraction has failed to become a real world application in which we need to let the staffs change their roles over time. In reality, the roles can change people get promoted or move laterally and this application cannot encapsulate those changes. With this now, we open the box for the world of Associations in OOP.

Associations, Aggregations and Compositions debate has been opened up as usual.
Simple understanding can help -   
**Associations** = builds relationships quite broad and super-set of Aggregation  
**Aggregations** = has-a relationship eg. CS Department has 10 students. If CS Department is closed the student still exist and can move to say Mathematics Department. Super-set of Composition.  
**Compositions** = part-of relationship eg. Finance Department is a part-of a Company. Company doesn't exists finance department doesn't exist

