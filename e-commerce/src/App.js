import { useState } from "react";
const productData = [
  {
    id: 101,
    name: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless Bluetooth headphones with noise cancellation and 20-hour battery life.",
    price: "$79.99",
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 102,
    name: "Smartphone - 128GB",
    description:
      "Latest 128GB smartphone with an ultra HD camera and a super AMOLED display.",
    price: "$599.99",
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 103,
    name: "Laptop - 15.6 inch",
    description:
      "High-performance laptop with Intel Core i7 processor and 16GB RAM.",
    price: "$999.99",
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 104,
    name: "Smartwatch",
    description:
      "Stylish smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
    price: "$199.99",
    imageUrl: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 105,
    name: "4K Ultra HD TV - 55 inch",
    description:
      "Stunning 55-inch 4K Ultra HD TV with built-in streaming services and Dolby Atmos sound.",
    price: "$499.99",
    imageUrl: "https://picsum.photos/200/300?random=5",
  },
];



function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>;
}

function App() {
  const [addItemToCart, setItemToCart] = useState([]);

  function handelAddItem(product) {
    setItemToCart((prevcartData) => [...prevcartData, product]);
    console.log("hello")
  }

  function handleDeleteItem(id) {
    setItemToCart((prevCartData) =>
      prevCartData.filter((product) => product.id !== id)
    );
  }
  return (
    <div className="app">
      <Navbar cartData={addItemToCart} onDeleteItems={handleDeleteItem} />
      <ProductsList onAddItem={handelAddItem} />
    </div>
  );
}
export default App;

function CartItemsList({ cartData, onDeleteItems }) {
  return (
    <div>
      {cartData.length > 0?(
        cartData.map((items) => (
          <CartItem item={items} onDeleteItems={onDeleteItems} key={items.id} />
        ))
      ):(<span>Cart is empty</span>)
     }
    {cartData.length >4 ? <Button>See More</Button>:""}
    </div>
  );
}

function CartItem({ item, onDeleteItems }) {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-img" />
      <span>{item.name}</span>
      <span>{item.price}</span>
      <span className="remove-item" onClick={() => onDeleteItems(item.id)}>
        &times;
      </span>
    </div>
  );
}

function Navbar({  cartData, onDeleteItems }) {
  const [toogleCart, setToogleCart] = useState(null);

  function handelToggle() {
    setToogleCart((show) => !show);
    console.log("hi")
  }

  return (
    <div className="container">
      <div className="Navbar">
        <div className="logo">
          <span className="logo-name">E-commerce</span>
        </div>
        <div className="search">
          <input className="search-box" placeholder="Search for product" />
        </div>

        <div className="cart-info">
          <div className="cart" onClick={handelToggle}>
            Cart
          </div>
          <span className="cart-total-items">{cartData.length}</span>
        </div>
      </div>
      {toogleCart && (
        <div className="cart-box">
          <CartItemsList cartData={cartData} onDeleteItems={onDeleteItems} />
        </div>
      )}
    </div>
  );
}

function ProductsList({ onAddItem }) {
  return (
    <div className="product-data">
      {productData.map((product) => (
        <Product product={product} key={product.id} onAddItem={onAddItem} />
      ))}
    </div>
  );
}

function Product({ product, onAddItem }) {
  return (
    <li className="product-info">
      <img src={product.imageUrl} alt={product.name}></img>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <Button className="item-button" onClick={() => onAddItem(product)}>
        Add to cart
      </Button>
    </li>
  );
}
