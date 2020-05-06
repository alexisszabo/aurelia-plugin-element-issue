import {bindable, inlineView, useView} from 'aurelia-framework';

@inlineView('<template><h3 style="background-color:lightpink">Inline View: Hello world ${message}</h3></template>')
//@useView('./hello-world.html')
export class HelloWorld {
  @bindable public message: string = '';
}
