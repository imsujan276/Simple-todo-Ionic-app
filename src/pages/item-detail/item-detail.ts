import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EditItemPage } from '../edit-item/edit-item';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

	public item= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ItemDetailPage');

     this.item = {
      id: this.navParams.get('id'),
      title: this.navParams.get('item').title,
      description: this.navParams.get('item').description
    };

    this.id = this.navParams.get('id');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  deleteItem(item){
  	console.log("item Object", item);
	this.dataService.remove(item.id);

  }

  editItem(item){
  	
  	let addModal = this.modalCtrl.create(EditItemPage, {item: item});
 
    addModal.onDidDismiss((item) => {
 
         alert(item.title);
 
    });
 
    addModal.present();
  }

}
