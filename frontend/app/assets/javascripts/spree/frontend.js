//= require jquery.payment
//= require spree
//= require polyfill.min
//= require fetch.umd
//= require spree/api/main
//= require spree/frontend/api_tokens
//= require spree/frontend/cart
//= require spree/frontend/checkout
//= require spree/frontend/checkout/address
//= require spree/frontend/checkout/payment
//= require spree/frontend/product

Spree.routes.api_tokens = Spree.pathFor('api_tokens')
Spree.routes.ensure_cart = Spree.pathFor('ensure_cart')
Spree.routes.api_v2_storefront_cart_apply_coupon_code = Spree.pathFor('api/v2/storefront/cart/apply_coupon_code')
