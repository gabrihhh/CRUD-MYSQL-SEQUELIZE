
const porduto = require('./produto');

(async()=>{
    const database = require('./db');
    const produto = require('./produto');

    await database.sync();


    await produto.create(
        {
            nome:'primeirotest',
            data:Date()
        }
    )
    
    await produto.create(
        {
            nome:'segundotest',
            data:Date()
        }
    )

    await produto.create(
        {
            nome:'terceirotest',
            data:Date()
        }
    )

    const alterProd = await produto.findByPk(2);
        alterProd.Nome = 'arquivo alterado';
        await alterProd.save();


    porduto.destroy({where:{id:1}});

    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);
})();