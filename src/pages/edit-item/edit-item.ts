import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

	public item;
	public title;
	public description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {

  	if(navParams.get('item')){
	  	this.item = navParams.get('item');
	  	this.title = this.item.title;
	  	this.description = this.item.description;
	  	console.log("Got data to edit model",this.item);
	 }
  }

  ionViewDidLoad() {
 
  }

  updateItem(){
 	
 	console.log('Updating');

 	let updateItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(updateItem);
 
  }
 
  close(){
  	console.log('closing......');
    this.view.dismiss(this.item);
  }

}
