import generatePaginatorTypeDef from './generator/paginator.typeDef'

import { User, Product, Shop, ProductShopInventoryLink } from './services'

import user from './user/user.typeDef'
import product from './product/product.typeDef'
import shop from './shop/shop.typeDef'
import productShopInventoryLink from './link/productShopInventoryLink.typeDef'

export const typeDefs = {
  user,
  userPaginator: generatePaginatorTypeDef(User),
  product,
  productPaginator: generatePaginatorTypeDef(Product),
  shop,
  shopPaginator: generatePaginatorTypeDef(Shop),
  productShopInventoryLink,
  productShopInventoryLinkPaginator: generatePaginatorTypeDef(ProductShopInventoryLink),
}