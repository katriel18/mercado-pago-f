import { Component } from '@angular/core';
import { Product } from './interfaces/Product';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-mercado-pago';
  products: Product[];

	constructor(private productService: ProductServiceService) { }

	ngOnInit() {
		this.productService.getProducts().then(products => {
			this.products = products;
      console.log('products: ',products);
		});
    }
    
}
