async function create(req, res) {
    let {filename} = req.file

    let newBook = {
        ...req.body, image: filename
    }
    console.log(newBook);

    res.send({data: newBook})
    
}

module.exports = { create }