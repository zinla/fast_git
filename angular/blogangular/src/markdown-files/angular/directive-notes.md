Angular Directive
You might be wondering why do we need Angular Directives. Now take a look at the below image, if you want a similar functionality in all the components for an example fade-in and fade-out functionality, you can take two approaches. The common approach would be, you can explicitly write the code in all the components for the required behavior, but it would be tedious and complex. Alternatively, like a function in a programming language, you can write the code and later you can call it anytime whenever you want that behavior of that function. Similarly, you can create a directive and write the behavior inside it. Then, wherever you need that behavior, you can import the directive.


Why do we need Directives?

Angular Directive is basically a class with a @Directive decorator. You might be wondering what are decorators? Decorators are functions that modify JavaScript classes. Decorators are used for attaching metadata to classes, it knows the configuration of those classes and how they should work.

You would be surprised to know that a component is also a directive-with-a-template. A @Component decorator is actually a @Directive decorator extended with template-oriented features. Whenever Angular renders a directive, it changes the DOM according to the instructions given by the directive. Directive appears within an element tag similar to attributes.

The Angular Directive can be classified into two types: structural and attribute directives.

Structural directives alter layout by adding, removing, and replacing elements in DOM.

Let us briefly understand the two majorly used built-in structural directives:


<li *ngFor="let movie of movies"></li>

<movie-detail *ngIf="selectedMovie"></movie-detail>
*ngFor is a looping variable that tells Angular to take one <li> per movie from the movies list.
*ngIf will include the MovieDetail component only if a movie is selected otherwise it will remove it from the DOM.
Attribute directive alter the appearance or behavior of an existing element. When you include attribute directives in templates, they look like regular HTML attributes. The ngModel directive, which implements two-way data binding, is an example of an attribute directive. ngModel modifies the behavior of an existing element by setting its display property and responding to the changing events.

<input [(ngModel)]="movie.name">
Angular has a few more directives that either alter the layout structure (for example, ngSwitch) or modify aspects of DOM elements and components (for example, ngStyle and ngClass) which I will be taking about. You can also write your own directives, i.e. Custom Angular Directive.

To define a directive, mark the class with the decorator and provide metadata.
```js
import {Directive} from '@angular/core';

@Directive({
  selector: 'my-directive',
})
export class MyDirective {
...
}
```
Declaring directives
Directives are declarables. They must be declared by an NgModule in order to be usable in an app.

A directive must belong to exactly one NgModule. Do not re-declare a directive imported from another module. List the directive class in the declarations field of an NgModule.
```js
declarations: [
 AppComponent,
 MyDirective
],
```
