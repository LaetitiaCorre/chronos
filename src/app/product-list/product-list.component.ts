import { Component, OnInit, style } from '@angular/core';
import { Product } from '../entities/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
 
})
export class ProductListComponent implements OnInit {
  list:Product[] = [
    new Product( '../assets/images/troiscomp.jpg', 'Kawaii', 'Les trois comp', 15, 'descriptiondescomp'),    
    new Product( '../assets/images/dog.jpg', 'Dog', 'uiazey', 15, 'descriptionduproduitdog'),
    new Product( '../assets/images/goute.jpg', 'goute', 'familegoute', 21, 'descriptionduproduitgoute'),
    new Product( '../assets/images/ananas.jpg', 'Ananas', 'Ananas', 5, 'descriptionduproduitananas'),
    new Product( '../assets/images/mysterbe.jpg', 'Mysterbe', 'Pokemon mysterbe', 23, 'descriptionduproduitananas'),
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
