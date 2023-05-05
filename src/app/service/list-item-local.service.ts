import { Injectable } from '@angular/core';
import { Thought } from '../model/thought.interface';

@Injectable({
  providedIn: 'root'
})
export class ListItemLocalService {

  private listItemLocal: Thought[];
  constructor() {
    this.listItemLocal = JSON.parse(localStorage.getItem('thoughtItems')|| '[]');
  }

  getListItemLocal(){
    return this.listItemLocal;
  }

  createItem(nomeDoItem: string){
    const id = this.listItemLocal.length + 1
    const item : Thought = {
      description: nomeDoItem,
      // startDates: new Date().toLocaleString('pt-BR'),
    }
    return item
  }

  adicionarItemNaList(nomeDoItem: string){
    const item = this.createItem(nomeDoItem)
    this.listItemLocal.push(item);
    // this.updateLocalStorage();
  }

  editItemDaList(itemAntigo: Thought, nomeEditadoDoItem: string){
    const itemEditado : Thought = {
      author: nomeEditadoDoItem,
      description: itemAntigo.description
    }
    const id = itemAntigo.slug;
    this.listItemLocal.splice(Number(id)-1, 1, itemEditado);
    // this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('thoughtItems', JSON.stringify(this.listItemLocal));
  }

}
