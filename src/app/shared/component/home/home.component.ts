import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productArr: Array<any> = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.fetchallproduct().subscribe({
      next: (res) => {
        const product = res.data || null;
        this.productArr.push(...product);
        console.log(this.productArr);
      },
    });
  }
}
