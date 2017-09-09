import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	image: any;
		options: CameraOptions 


  constructor(public navCtrl: NavController, private camera: Camera, private socialSharing:SocialSharing) {

 
}

takeselfie(){
	this.camera.getPicture(this.options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.image = base64Image 
}, (err) => {
 // Handle error
});

}

share(){
	this.socialSharing.shareViaFacebook('our first app',this.image).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
}


}
