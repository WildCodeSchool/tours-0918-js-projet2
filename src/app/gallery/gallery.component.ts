import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  medias: any;

  constructor(private service: NgbModal) {

  }

  openMedia(content: any) {
    this.service.open(content).result

    .then(resultat => {
        console.log(resultat);
    })

    .catch(error => {
        console.log(error);
    });
  }

  ngOnInit() {
    this.medias = [
      {
      'format': 'jpeg',
      'width': 5616,
      'height': 3744,
      'filename': '0000_yC-Yzbqy7PY.jpeg',
      'id': 0,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }, {
      'format': 'jpeg',
      'width': 5616,
      'height': 3744,
      'filename': '0001_LNRyGwIJr5c.jpeg',
      'id': 1,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }, {
      'format': 'jpeg',
      'width': 5616,
      'height': 3744,
      'filename': '0002_N7XodRrbzS0.jpeg',
      'id': 2,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }, {
      'format': 'jpeg',
      'width': 5616,
      'height': 3744,
      'filename': '0003_Dl6jeyfihLk.jpeg',
      'id': 3,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }, {
      'format': 'jpeg',
      'width': 5616,
      'height': 3744,
      'filename': '0004_y83Je1OC6Wc.jpeg',
      'id': 4,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }, {
      'format': 'jpeg',
      'width': 5245,
      'height': 3497,
      'filename': '0005_LF8gK8-HGSg.jpeg',
      'id': 5,
      'author': 'Alejandro Escamilla',
      'author_url': 'https://unsplash.com/@alejandroescamilla',
      'post_url': 'https://picsum.photos/50/50?random&t=0.6521546214153209'
    }];
  }

}
