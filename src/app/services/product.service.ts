import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        product_id: 'pd100',
        product_img: '../../../assets/audi_R8.jpg',
        product_name: 'Audi R8',
        product_price: 158600,
        product_details:
          'Audi R8 began as racing prototype at the Lemans in 2000 winning in its first entry.',
        product_quantity: 1,
      },
      {
        product_id: 'pd101',
        product_img: '../../../assets/audi-sport-quattro.jpg',
        product_name: 'Audi Quattro',
        product_price: 40300,
        product_details:
          'This quattro system normally splits torque between the front and rear, always powering all four wheels.',
        product_quantity: 1,
      },
      {
        product_id: 'pd102',
        product_img: '../../../assets/audi_A7.jpeg',
        product_name: 'Audi A7',
        product_price: 70295,
        product_details:
          'This German luxury brand is known for technology and style as much as its performance, well-crafted interiors, and its trademark Quattro all-wheel-drive system.',
        product_quantity: 1,
      },
      {
        product_id: 'pd103',
        product_img: '../../../assets/dodge_challenger.jpeg',
        product_name: 'Dodge Challenger',
        product_price: 47265,
        product_details:
          'Another classic Dodge model is the Dodge Challenger, which was initially launched in 1959. Throughout the years, the Dodge Challenger experienced various facelifts, and enhancements and was marketed in three unique classes.',
        product_quantity: 1,
      },
    ];
  }
}
