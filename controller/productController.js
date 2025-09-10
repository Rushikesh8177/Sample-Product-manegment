const product = require('../data/product')
const catagoris = require('../data/catagoris')



const getAllproducts=(req, res)=>{
res.status(200).send({product: product})
}

function getProductByID( req, res){
        console.log(req.params.ID);
    const ID = req.params.ID;
    const index = product.findIndex((b)=>b.id == ID);

    if(index == -1){
        res.status(404).send({msg: "Catagoris  not found" ,success: false})
    }else{
        const producty = product.find((b)=> b.id == ID);
        res.status(200).send({product : producty , status: true})
    }
}

function createProduct(req, res){
   cat = catagoris.find((c)=> c.id == req.body.catagorisID)

  if(!cat){
    res.status(400).send({msg: "product Not Found"})
  }else{

   const  newProduct ={
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.quantity,
        catagorisID: cat.id
        
    }

    product.push(newProduct)
    res.status(200).send({msg: "Product  Added Successfully"})
}
}

function updateProduct(req,res){
  const ID = req.params.ID
    const index = product.findIndex((b)=> b.id == ID)

    if(index == -1){
        res.status(400).send({msg: "product not Found ", success: false})
    }else{
        product[index].name = req.body.name || product[index].name
        res.status(200).send({msg: "product updated successfully" })
    }
}

function deleteProduct(req, res){
      const ID = req.params.ID
    const index = product.findIndex((b)=> b.id == ID)

   if(index == -1){
    res.status(400).send({msg: "product not Found" , success: false})

   }else{
    product.splice(index ,1)
    res.status(200).send({msg: "product Deleted Successdully" , })
   }
}

module.exports ={
    getAllproducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
}