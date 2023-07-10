import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // EP.3
  // value = 0;

  // calBuffet(value: string){
  //   const price = Number(value);
  //   this.value = (price*3)/4;
  // }
  // --------------------------------------

  // EP.9
  // testClick() {
  //   console.log('Test');
  // }
  // testNumberChange(value: number) {
  //   console.log('test NumberChange from app action bar:', value);
  // }

  // appminLabel = 'myappMinLabel';
  // appmaxLabel = 'myappMaxlabel';

  // doAppMaxChange(value: number) {
  //   console.log('test maxChange event', value);
  // }

  // doAppMinChange(value: number) {
  //   console.log('test minChange event', value);
  // }

  // squareHeight = 100;
  // squareWidth = 250;

  //


  // activate: boolean = false;
  // appCounter = 20;
  // squareHeight = 100;
  // squareWidth = 250;

  // testClick() {
  //   console.log('Test');
  // }
  // testNumberChange(value: number) {
  //   console.log('test NumberChange from app action bar:', value);
  // }

  // appminLabel = 'myappMinLabel';
  // appmaxLabel = 'myappMaxlabel';

  // doAppMaxChange(value: number) {
  //   console.log('test maxChange event', value);
  // }

  // doAppMinChange(value: number) {
  //   console.log('test minChange event', value);
  // }


  customerList: string[] = ['customer1','customer2','customer3','customer4']

  pushCustomer(){
    this.customerList.push('customer' + (this.customerList.length+1));
  }
  unshiftCustomer(){
    this.customerList.unshift('customer' + (this.customerList.length+1));
  }
  removeCustomer(index: number) {
    this.customerList.splice(index, 1);
  }
}
