import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  photo = null
  title = null;
  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
    private socialSharing: SocialSharing,
    private file: File
  ) {
  
  }

  ngOnInit() {
    this.photo = this.navParams.get('photo');
    this.title = this.navParams.get('title');
  }

  async resolveLocalFile() {
    return this.file.copyFile(
      `${this.file.applicationDirectory}www/assets/images`,
      'this.photo', this.file.cacheDirectory,
      `${new Date().getTime()}.jpg`
    )
  }

  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }

  shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.photo,null, this.title);
  }

  closeModal()
  {
    this.modalController.dismiss();
  }

}
