const List = ({ products, setProductsList }) => {
  function handleDelete(name) {
    setProductsList(products.filter((product) => product.name !== name));
  }
  function handleAllDelete() {
    setProductsList([]);
  }
  function handleSort() {
    let sortedPrice = [...products.sort((a,b) => a.price - b.price)]
    setProductsList(sortedPrice);
  }
  return (
    <>
      <ul>
        {products &&
          products.map((product, index) => {
            return (
              <li key={index}>
                {product.name} - {product.price}
                <button onClick={() => handleDelete(product.name)}>delete</button>
              </li>
            );
          })}
          </ul>
          <button onClick={() => handleAllDelete(products)}>Clear All</button>
          <button onClick={() => handleSort(products.price)}>By Price</button>
    </>
  );
};
 
export default List