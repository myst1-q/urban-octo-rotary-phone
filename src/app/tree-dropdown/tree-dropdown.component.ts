import { Component, OnInit } from '@angular/core';


interface Country {
  countryName: string;
  state: string[];
  
 
}
interface State{
stateName:string;
  city:string[];
}

interface City{
  cityName:string;
  dc:string[];
}



@Component({
  selector: 'app-tree-dropdown',
  templateUrl: './tree-dropdown.component.html',
  styleUrls: ['./tree-dropdown.component.css']
})
export class TreeDropdownComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }
 countryflag=false;
 stateflag=false;
 cityflag=false;
 selectedCountry:any;
 dc1:any;
 states1:any;
 city1:any;
 dcflag=false;
  selected = 'option2';
  countries: Country[] = [
    {countryName: 'India', state: ['Kerala','Karnataka']},
    {countryName: 'Australia', state: ['Bourke St','Queensland']},
  ];
  states:State[]=[
    {stateName:'Kerala',city:['Trivandrum']},
    {stateName:'Karnataka',city:['Banglore','Mysore']},
    {stateName:'Bourke St',city:['Dockland']},
    {stateName:'Queensland',city:['Brisbane']}

  ]
  cities:City[]=[
    {cityName:'Trivandrum',dc:['dc1']},
    {cityName:'Banglore',dc:['dc1','dc2']},
    {cityName:'Mysore',dc:['dc1','dc2','dc3']},
    {cityName:'Dockland',dc:['dc1','dc2']},
    {cityName:'Brisbane',dc:['dc1']},

  ]

  onCountryChange(event:any){
   
 this.stateflag=false;
 this.cityflag=false;
 this.dcflag=false;
    console.log(event.value);
this.countryflag=true;
this.selectedCountry=event.value;
for(let i=0;i<this.countries.length;i++){
  if(this.selectedCountry==this.countries[i].countryName)
    this.states1=this.countries[i].state;
  
}

  }
  onStateChange(event:any){
    this.cityflag=false;
    this.dcflag=false;
    console.log('hello');
    this.stateflag=true;
    for(let i=0;i<this.states.length;i++){
      if(event.value==this.states[i].stateName)
        this.city1=this.states[i].city;
      
    }
  }

  onCityChange(event:any){
    this.dcflag=false;
    console.log('hello fromn dc');
    this.cityflag=true;
    for(let i=0;i<this.cities.length;i++){
      if(event.value==this.cities[i].cityName)
        this.dc1=this.cities[i].dc;
      
    }
  }
  onDcChange(){
    this.dcflag=true
  }
 
}
