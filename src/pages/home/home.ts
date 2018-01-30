import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {

  		this.dataService.getData().then((todos) => {
  			if(todos){
  				this.items = todos;
  			}
  		});
  }

  ionViewDidLoad(){
  	this.items = [
  		{ title: 'todo 1', description: 'test1'},
  		{ title: 'todo 2', description: 'test2'},
  		{ title: 'todo 3', description: 'test3'},
  	];
  }

  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 

  viewItem(item, i){
  alert(i);
	  this.navCtrl.push(ItemDetailPage, {
	    item: item,
	    id: i
	  });
	}

}
