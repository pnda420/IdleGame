import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Product {
    name: string;
    level: string;
    value: string;
    cost: number;
}

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private products = new Subject<Product[]>();
    products$ = this.products.asObservable();
    private currentProducts: Product[] = [
        { name: 'Worker', level: '0', value: '1€/1000ms', cost: 34 },
        { name: 'Work Button', level: '0', value: '1€/click', cost: 34 }
    ];

    getCurrentValue(): Product[] {
        return this.currentProducts;
    }
}
