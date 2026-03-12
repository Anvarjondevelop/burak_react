//REACTDA DAXLDOR TYPE INTEGRATION

import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
// butun application da ishlatilayotgan ma'lumotlarni type integratsiyasi
export interface AppRootState {
  homePage: HomePageState; //HomePage dagi barcha ma'lumotlarni type integratsiayasini HomePageState deb belgilab oldik
  // productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  // homePage screen componentimizni ichida ishlatiladigan barcha ma'lumotlarni jam qilgan interface
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
/** PRODUCTS PAGE **/

/** ORDERS PAGE **/
