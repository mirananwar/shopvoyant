# shopvoyant API

Important Requests:

**Create Shop**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "addShop",
	"query": {
		"id": null,
		"name": null,
		"image": null,
		"__args": {
			"name": "123123123",
			"image": null,
			"address_line_1": "123 Fake Street",
			"address_line_2": "Apt 123",
			"address_city": "New York",
			"address_state": "New York",
			"address_postal_code": "10003",
			"address_country": "USA"
		}
	}
}
```

**Create Product**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "addProduct",
	"query": {
		"id": null,
		"upc": null,
		"name": null,
		"image": null
		"__args": {
			"name": "Toothpaste Generic",
			"upc": "12313123
			"image": null
		}
	}
}
```

**Claim Product Availability at Shop**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "addProductShopInventoryLink",
	"query": {
		"id": null,
		"__args": {
			"product": 1,
			"shop": 1
			"quantity": 9999,
			"price": 12345
		}
	}
}
```

**Update Product Availability at Shop**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "updateProductShopInventoryLink",
	"query": {
		"id": null,
		"__args": {
			"id": 1,
			"quantity": 222222,
			"price": 333333
		}
	}
}
```

**Get Product By UPC**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "getMultipleProduct",
	"query": {
		"data": {
			"id": null,
			"name": null,
			"image": null,
			"upc": null
		},
		"__args": {
			"upc": "123123123"
		}
	}
}
```

**Search Products by Name**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "getMultipleProduct",
	"query": {
		"data": {
			"id": null,
			"name": null,
			"image": null,
			"upc": null
		},
		"__args": {
			"search": "Toilet"
		}
	}
}
```

**Show shops where product is available in zip code 10003, showing the lowest price first**

`POST https://us-central1-shopvoyant-483f6.cloudfunctions.net/api/jql`

```
{
	"action": "getProduct",
	"query": {
		"id": null,
		"name": null,
		"available_in": {
			"data": {
				"id": null,
				"name": null,
				"image": null,
				"address_line_1": null,
				"address_line_2": null,
				"address_city": null,
				"address_state": null,
				"address_postal_code": null,
				"address_country": null
			},
			"__args": {
				"shop_zip": "10003",
				"sortBy": ["price"],
				"sortDesc": [false]
			}
		},
		"__args": {
			"id": 1
		}
	}
}
```
