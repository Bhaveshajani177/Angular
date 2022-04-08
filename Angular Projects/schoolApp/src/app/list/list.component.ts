import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../services/image.service';
import IImage from '../core/models/iimage.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild('closeModal') closeModal!: ElementRef;

  images: IImage[] = [];
  editImageForm!: FormGroup;
  editImageId: string | undefined;
  errorMsg: any;
  // imageOrder = '1';
  // sort$!: BehaviorSubject<string>;

  constructor(
    private imageService: ImageService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    // this.sort$ = new BehaviorSubject(this.imageOrder);
  }

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

        this.images.forEach((element, index) => {
          if (element.docID == this.editImageId) {
            this.images[index].title = this.editImageForm.value.title;
          }
        });
        this.closeModal.nativeElement.click();
        this.ngxService.stop();
      } catch (e) {
        this.errorMsg = e;
        this.toastr.error(this.errorMsg, 'Failed!');
        this.ngxService.stop();
        return;
      }
    }
  }

  deleteImage($event: Event, img: IImage) {
    $event.preventDefault();
    this.imageService.deleteImage(img);

    this.images.forEach((element, index) => {
      if (element.docID == img.docID) {
        this.images.splice(index, 1);
      }
    });
  }
}
