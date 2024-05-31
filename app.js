const products = [
    // Electronics
    { name: "iPhone 13 Pro", price: 999, category: "Electronics", brand: "Apple" },
    { name: "Samsung Galaxy S21 Ultra", price: 1199, category: "Electronics", brand: "Samsung" },
    { name: "Sony WH-1000XM4 Headphones", price: 349, category: "Electronics", brand: "Sony" },
    { name: "Dell XPS 15 Laptop", price: 1499, category: "Electronics", brand: "Dell" },
    { name: "Canon EOS R5 Camera", price: 3899, category: "Electronics", brand: "Canon" },
  
    // Clothing
    { name: "Nike Air Force 1", price: 90, category: "Clothing", brand: "Nike" },
    { name: "Adidas Ultraboost", price: 180, category: "Clothing", brand: "Adidas" },
    { name: "Levi's 501 Original Fit Jeans", price: 59, category: "Clothing", brand: "Levi's" },
    { name: "The North Face 1996 Retro Nuptse Jacket", price: 279, category: "Clothing", brand: "The North Face" },
    { name: "Lululemon Align Leggings", price: 98, category: "Clothing", brand: "Lululemon" },
  
    // Home & Kitchen
    { name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", price: 79, category: "Home & Kitchen", brand: "Instant Pot" },
    { name: "iRobot Roomba 960 Robot Vacuum", price: 499, category: "Home & Kitchen", brand: "iRobot" },
    { name: "Nespresso VertuoPlus Coffee and Espresso Maker", price: 149, category: "Home & Kitchen", brand: "Nespresso" },
    { name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner", price: 699, category: "Home & Kitchen", brand: "Dyson" },
    { name: "Cuisinart 14-Cup Food Processor", price: 199, category: "Home & Kitchen", brand: "Cuisinart" },
  
    // Books
    { name: "The Great Gatsby by F. Scott Fitzgerald", price: 10, category: "Books", brand: "N/A" },
    { name: "To Kill a Mockingbird by Harper Lee", price: 9, category: "Books", brand: "N/A" },
    { name: "1984 by George Orwell", price: 12, category: "Books", brand: "N/A" },
    { name: "The Catcher in the Rye by J.D. Salinger", price: 8, category: "Books", brand: "N/A" },
    { name: "Harry Potter and the Sorcerer's Stone by J.K. Rowling", price: 15, category: "Books", brand: "N/A" }
   ];
  
  // console.log(products);
  
//   products.map((item)=>{
//         console.log(item.category)
//   })
  
//   const electrics = products.filter(item =>{
//   console.log(item.category)
//   return item.category === 'electrics' && item.price > 100
//   }).filter((item)=>{
//         return item.price < 200
//   })
  
//   const electrics = products.filter(item => item.category === 'electrics')
//   .filter(item => item.price > 100).filter(item => item.price < 100)
//   console.log(electrics);
  
  
  products.map((item)=>{
  console.log(item.category);
  
  div.innerHTML +=`
  <h1>product name:${item.brand}${item.name}</h1>
  <h1>category:${item.category}</h1>
  <h1>price:${item.price}</h1>
  <hr/>`
  
  })
  const filtereditem = (btn) => {
        div.innerHTML = ''
        console.log(btn.innerHTML);
        const filtered = products.filter(item => item.category === btn.
              innerHTML).map (item =>{
                    div.innerHTML +=`
                    <h1>product name:${item.brand}${item.name}</h1>
                    <h1>category:${item.category}</h1>
                    <h1>price:${item.price}</h1>
                    <hr/>
  
  
                    
                    `
              })
             
        
        console.log(filtered);
  }
  allitems =() =>{
        products.map((item)=>{
              console.log(item.category);
              
              div.innerHTML +=`
              <h1>product name:${item.brand}${item.name}</h1>
              <h1>category:${item.category}</h1>
              <h1>price:${item.price}</h1>
              <hr/>`
              
              })
        }