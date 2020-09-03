import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  employee_list=[{
    name:"tony",sname:"kobe",age:40 },
{name:"matome",sname:"maifo",age:30}];
}
