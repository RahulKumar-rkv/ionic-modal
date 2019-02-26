import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [
    {fileName:'1.jpg', title:'Image Title'},
    {fileName:'2.jpg', title:'Image Title'},
    {fileName:'3.jpg', title:'Image Title'},
    {fileName:'4.jpg', title:'Image Title'},
    {fileName:'5.jpg', title:'Image Title'},
    {fileName:'6.jpg', title:'Image Title'},
    {fileName:'7.jpg', title:'Image Title'},
    {fileName:'8.jpg', title:'Image Title'},
  ];

  constructor(private modalController: ModalController) {}

  async openModal(img) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { 
        photo: img,
        title: this.images
      }
    });
    return await modal.present();
  }

}
