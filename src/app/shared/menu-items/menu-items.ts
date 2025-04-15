import { state } from '@angular/animations';
import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon?: string;
  children?: Menu[]; 

}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: '' },
  // {
  //   state: 'consent',
  //   name: 'Consent',
  //   type: 'sub',
  //   children: [
  //     { state: 'consent-request', name: 'Consent Request', type: 'link' },
  //     { state: 'consent-artefacts', name: 'Consent Artefacts', type: 'link' }
  //   ]
  // },
 

];


@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
