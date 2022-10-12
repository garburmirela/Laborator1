import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab_one';
  limit: number = 0;
  items = [
    {
    Name: 'Apples' ,
    Price: 21.50,
    Category: 'Fruits',
    Count: 15
    },
    {
    Name: 'Oreo' ,
    Price: 12.00,
    Category: "Biscuits",
    Count: 30
    },
    {
    Name: 'Mars' ,
    Price: 13.20,
    Category: 'Chocolate',
    Count: 1
    },
    {
    Name: 'Bread' ,
    Price: 4.30,
    Category: 'Bakes',
    Count: 4
    },
    {
    Name: 'Icecream' ,
    Price: 7.00,
    Category: 'Sweets',
    Count: 3
    },
    {
    Name: 'Bananas' ,
    Price:25.65,
    Category: 'Fruits',
    Count: 45
    },
  ];

  cities = [
    {
      Name: 'Bucuresti',
      Country: 'Romania'
    },
    {
      Name: 'Kiev',
      Country: 'Ukrain'
    },
    {
    Name: 'Rome' ,
    Country: 'Italy'
    },
    {
    Name: 'Istanbul' ,
    Country: 'Turkey'
    },
    {
    Name: 'Berlin' ,
    Country: 'Germany'
    },
    {
    Name: 'Paris' ,
    Country: 'France'
    },
    {
    Name: 'Madrid' ,
    Country: 'Spain'
    }
  ];

  limiting = (l:string) =>{
    this.limit = parseInt(l);
  }

  filterFunction = (filter:string, order: boolean, constraint: string) =>{

    let filteredItems;
    if(filter === "Name")
    filteredItems = this.items.filter( i => i.Name === constraint).slice(0, this.limit)
    else
    if(filter === "Category")
    filteredItems = this.items.filter( i => i.Category === constraint).slice(0, this.limit)
    else filteredItems = this.items.slice(0, this.limit)

    if(order) {

      return this.orderBy(filteredItems)

    }
    return filteredItems;
  }

  orderBy = (items:any) => {
    return items.sort((a: any, b:any) => a.Count - b.Count);
  }
country: string = '';
  displayCountry = (city: string) => {
   this.country = this.cities.filter(c => c.Name === city)[0].Country
  }
}
