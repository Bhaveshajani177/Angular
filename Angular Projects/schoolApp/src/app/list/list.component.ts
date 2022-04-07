import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import IImage from '../core/models/iimage.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  images: IImage[] = [];
  editImageForm!: FormGroup;
  editImageId: string | undefined;
  errorMsg: any;

  constructor(
    private imageService: ImageService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllImages();

    this.editImageForm = new FormGroup({
      title: new FormControl([Validators.required]),
    });
  }

  async getAllImages() {
    this.ngxService.start();

    await this.imageService.getImages().subscribe((docs) => {
      docs.forEach((doc) => {
        this.images.push({ docID: doc.id, ...doc.data() });
      });
    });

    this.ngxService.stop();
  }

  openEditImageModel(img: IImage) {
    this.editImageId = img.docID;
    this.editImageForm.get('title')?.setValue(img.title);
  }

  async editImage() {
    if (this.editImageId) {
      this.ngxService.start();
      try {
        await this.imageService.updateImage(
          this.editImageId,
          this.editImageForm.value.title
        );
        this.ngxService.stop();
      } catch (e) {
        this.errorMsg = e;
        this.toastr.error(this.errorMsg, 'Failed!');
        this.ngxService.stop();
        return;
      }
    }
  }
}
