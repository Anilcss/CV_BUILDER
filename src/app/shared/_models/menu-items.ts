import { Injectable } from '@angular/core';
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}
export interface Menu {
  state: string;
  name: string;
  type: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
  },
  
 
  {state: 'inventory',name: 'Inventory',type: 'sub',
    children: [
      {
        state: 'incomingcylinder',
        name: 'Incoming cylinders',
        type: 'link',
        icon: ''
      },
      {
        state: 'production',
        name: 'Production',
        type: 'link',
        icon: ''
      }    ,
        {
        state: 'outgoingcylinder',
        name: 'outgoing cylinders',
        type: 'link',
        icon: ''
      },
      {
        state: 'adddirecttoproduction',
        name: 'Add to production',
        type: 'link',
        icon: ''
      },
     

    ]
  },
  {state: 'reports',name: 'Reports',type: 'sub',
    children: [
      {
        state: 'incomingreport',
        name: 'Incoming cylinders Report',
        type: 'link',
       
      },
      {
        state: 'productionreport',
        name: 'Production Report',
        type: 'link',
      
      }    ,
        {
        state: 'outgoingreport',
        name: 'outgoing cylinders Report',
        type: 'link',
      },
    ]
  },

  { state: 'createpo', name: 'Create PO', type: 'link'}
];

@Injectable({
  providedIn: 'root'
})
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
