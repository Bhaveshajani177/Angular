import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { v4 as uuid } from 'uuid';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { switchMap } from 'rxjs';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  isDragover = false;
  file: File | null = null;
  nextStep = false;
  isFormSubmitted = false;
  user: firebase.User | null = null;

  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  uploadForm = new FormGroup({ title: this.title });

  constructor(
    private toastrService: ToastrService,
    private angularFireStorage: AngularFireStorage,
    private ngxService: NgxUiLoaderService,
    private auth: AngularFireAuth,
    private imageService: ImageService
  ) {
    auth.user.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {}

  storeFile($event: Event) {
    this.isDragover = false;

    this.file = this.file = ($event as DragEvent).dataTransfer
      ? ($event as DragEvent).dataTransfer?.files.item(0) ?? null
      : ($event.target as HTMLInputElement).files?.item(0) ?? null;

    if (!this.file || this.file.type !== 'image/png') {
      this.toastrService.error(
        'Please upload only png file type',
        'Upload Failed!'
      );
      return;
    }

    this.nextStep = true;
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
  }

  uploadFile() {
    this.ngxService.start();
    this.isFormSubmitted = true;

    // const imagePath = `images/${this.file?.name}`;
    const imageFileName = uuid();
    const imagePath = `images/${imageFileName}.png`;

    const imageUpload = this.angularFireStorage.upload(imagePath, this.file);
    const imageRef = this.angularFireStorage.ref(imagePath);

    imageUpload.then(async (res) => {
      await imageRef.getDownloadURL().subscribe((res) => {
        if (!this.user) {
          return;
        }

        const imageData = {
          uid: this.user.uid,
          fileName: `${imageFileName}.png`,
          url: res,
        };

        this.imageService.createImage(imageData);
      });

      this.ngxService.stop();
      this.toastrService.success('File uploaded successfully', 'Success');
      this.nextStep = false;
      this.clearForm();
    });

    imageUpload.catch((res) => {
      this.ngxService.stop();
      this.toastrService.error('File uploaded failed', 'Failed!');
    });
  }

  clearForm() {
    this.uploadForm.reset();
    this.isFormSubmitted = false;
  }
}
