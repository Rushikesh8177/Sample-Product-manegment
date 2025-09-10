const catagoris = require('../data/catagoris')



const getAllcatagoris=(req, res)=>{
  res.status(200).send({catagoris: catagoris})
}

function getcatagorisByID( req, res){
       console.log(req.params.ID);
    const ID = req.params.ID;
    const index = catagoris.findIndex((b)=>b.id == ID);

    if(index == -1){
        res.status(404).send({msg: "Catagoris  not found" ,success: false})
    }else{
        const catagoriy = catagoris.find((b)=> b.id == ID);
        res.status(200).send({catagoris : catagoriy , status: true})
    }
}

function createCatagoris(req, res){

    const  newCat ={
        id: catagoris.length + 1,
        name: req.body.name,
        
    }

    catagoris.push(newCat)
    res.status(200).send({msg: "Catagoris Added Successfully"})
}

function updateCatagoris(req, res){
    const ID = req.params.ID
    const index = catagoris.findIndex((b)=> b.id == ID)

    if(index == -1){
        res.status(400).send({msg: "Catagoris not Found ", success: false})
    }else{
        catagoris[index].name = req.body.name || catagoris[index].name
        res.status(200).send({msg: "Catagoris updated successfully" })
    }
}

function deleteCatagoris(req, res){
const ID = req.params.ID
    const index = catagoris.findIndex((b)=> b.id == ID)

   if(index == -1){
    res.status(400).send({msg: "catagoris not Found" , success: false})

   }else{
    catagoris.splice(index ,1)
    res.status(200).send({msg: "catagoris Deleted Successdully" , })
   }
}

module.exports ={
    getAllcatagoris,
    getcatagorisByID,
    createCatagoris,
    updateCatagoris,
    deleteCatagoris
}