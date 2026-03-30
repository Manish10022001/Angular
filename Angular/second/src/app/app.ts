import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
{/*
   Component to Template:
     1. string interpolation: it is a way of getting data from component to template as a string
     we will do it by {{}}(double flower brackets)
     2.property Binding:
     it is also another way of sending data from component to template but it won't send data as string.
     we will do it using square brackets []
*/}
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  n = 'manish';
  img = 'https://m.media-amazon.com/images/I/41cSpRScVlL.jpg';
  title = 'Motorola G57';
  price = '79,999';
  isNotAvailable = false; //add to cart button will be disabled else come if true else add to card will be visible
  //but if set to false still it will keep button disabled as we are using string interpolation i.e values sent as string,
  //by default sting value is always true;

  //so to resolve it we use property binding([])
}
