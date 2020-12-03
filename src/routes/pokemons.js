const express = require('express');
const router = express.Router();
// const axios = require('axios');
const pool = require('../database');
const { request } = require('express');

const usuario1 =[];

router.get('/add',async (req, res) => {
    console.log(req.body)
    //  const total = await pool.query("SELECT COUNT(*) FROM `pokemons` WHERE user_id=?", [req.user.id]);
    //  console.log(total)
    // const poke = await pool.query("SELECT * FROM `pokemons` WHERE user_id=?", [req.user.id]);
    // console.log(poke)
    
    res.render('pokemons/add');
});


router.get('/deleteee/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM pokemons WHERE ID=?', [id]);
    res.redirect('/pokemons/counts');

})



router.get('/list', async (req, res) => {

    const pokeRegistros = await pool.query("SELECT * FROM `pokemons` WHERE user_id=?", [req.user.id]);
    console.log(pokeRegistros)

    //     // res.render('../views/pokemons/list.hbs' , {views});

    res.render('pokemons/list', { pokeRegistros });
});



router.post('/add6', async (req, res) => {
    //console.log("llego")
    //console.log("////////////")

    //  console.log(req.body)
    const cap = req.body
    //  console.log("Body Obj:" +JSON.stringify(req.body)); // asi lo vuelve string

    const user_id = req.user.id;


    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)



    const id2 = req.body[1].id;
    const name2 = req.body[1].name;
    const experience2 = req.body[1].experience;
    const type2 = req.body[1].type;
    const abilities2 = req.body[1].abilities;
    const imagen2 = req.body[1].imagen;
    console.log(`${id2},  ${name2}, ${experience2},  ${type2},  ${abilities2}, ${imagen2}`)


    const id3 = req.body[2].id;
    const name3 = req.body[2].name;
    const experience3 = req.body[2].experience;
    const type3 = req.body[2].type;
    const abilities3 = req.body[2].abilities;
    const imagen3 = req.body[2].imagen;
    console.log(`${id3},  ${name3}, ${experience3},  ${type3},  ${abilities3}, ${imagen3}`)



    const id4 = req.body[3].id;
    const name4 = req.body[3].name;
    const experience4 = req.body[3].experience;
    const type4 = req.body[3].type;
    const abilities4 = req.body[3].abilities;
    const imagen4 = req.body[3].imagen;
    console.log(`${id4},  ${name4}, ${experience4},  ${type4},  ${abilities4}, ${imagen4}`)



    const id5 = req.body[4].id;
    const name5 = req.body[4].name;
    const experience5 = req.body[4].experience;
    const type5 = req.body[4].type;
    const abilities5 = req.body[4].abilities;
    const imagen5 = req.body[4].imagen;
    console.log(`${id5},  ${name5}, ${experience5},  ${type5},  ${abilities5}, ${imagen5}`)



    const id6 = req.body[5].id;
    const name6 = req.body[5].name;
    const experience6 = req.body[5].experience;
    const type6 = req.body[5].type;
    const abilities6 = req.body[5].abilities;
    const imagen6 = req.body[5].imagen;
    console.log(`${id6},  ${name6}, ${experience6},  ${type6},  ${abilities6}, ${imagen6}`)


    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id2, name2, experience2, imagen2, type2, abilities2, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id3, name3, experience3, imagen3, type3, abilities3, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id4, name4, experience4, imagen4, type4, abilities4, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id5, name5, experience5, imagen5, type5, abilities5, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id6, name6, experience6, imagen6, type6, abilities6, user_id])
    req.flash('The pokemons inset on database')
    res.render('../views/pokemons/list.hbs');

})

router.post('/add5', async (req, res) => {
    //console.log("llego")
    //console.log("////////////")

    //  console.log(req.body)
    const cap = req.body
    //  console.log("Body Obj:" +JSON.stringify(req.body)); // asi lo vuelve string

    const user_id = req.user.id;


    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)



    const id2 = req.body[1].id;
    const name2 = req.body[1].name;
    const experience2 = req.body[1].experience;
    const type2 = req.body[1].type;
    const abilities2 = req.body[1].abilities;
    const imagen2 = req.body[1].imagen;
    console.log(`${id2},  ${name2}, ${experience2},  ${type2},  ${abilities2}, ${imagen2}`)


    const id3 = req.body[2].id;
    const name3 = req.body[2].name;
    const experience3 = req.body[2].experience;
    const type3 = req.body[2].type;
    const abilities3 = req.body[2].abilities;
    const imagen3 = req.body[2].imagen;
    console.log(`${id3},  ${name3}, ${experience3},  ${type3},  ${abilities3}, ${imagen3}`)



    const id4 = req.body[3].id;
    const name4 = req.body[3].name;
    const experience4 = req.body[3].experience;
    const type4 = req.body[3].type;
    const abilities4 = req.body[3].abilities;
    const imagen4 = req.body[3].imagen;
    console.log(`${id4},  ${name4}, ${experience4},  ${type4},  ${abilities4}, ${imagen4}`)



    const id5 = req.body[4].id;
    const name5 = req.body[4].name;
    const experience5 = req.body[4].experience;
    const type5 = req.body[4].type;
    const abilities5 = req.body[4].abilities;
    const imagen5 = req.body[4].imagen;
    console.log(`${id5},  ${name5}, ${experience5},  ${type5},  ${abilities5}, ${imagen5}`)


    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id2, name2, experience2, imagen2, type2, abilities2, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id3, name3, experience3, imagen3, type3, abilities3, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id4, name4, experience4, imagen4, type4, abilities4, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id5, name5, experience5, imagen5, type5, abilities5, user_id])
    req.flash('The pokemons inset on database')

    res.render('../views/pokemons/list.hbs');

})
router.post('/add4', async (req, res) => {
    //console.log("llego")
    //console.log("////////////")

    //  console.log(req.body)
    const cap = req.body
    //  console.log("Body Obj:" +JSON.stringify(req.body)); // asi lo vuelve string

    const user_id = req.user.id;


    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)



    const id2 = req.body[1].id;
    const name2 = req.body[1].name;
    const experience2 = req.body[1].experience;
    const type2 = req.body[1].type;
    const abilities2 = req.body[1].abilities;
    const imagen2 = req.body[1].imagen;
    console.log(`${id2},  ${name2}, ${experience2},  ${type2},  ${abilities2}, ${imagen2}`)


    const id3 = req.body[2].id;
    const name3 = req.body[2].name;
    const experience3 = req.body[2].experience;
    const type3 = req.body[2].type;
    const abilities3 = req.body[2].abilities;
    const imagen3 = req.body[2].imagen;
    console.log(`${id3},  ${name3}, ${experience3},  ${type3},  ${abilities3}, ${imagen3}`)



    const id4 = req.body[3].id;
    const name4 = req.body[3].name;
    const experience4 = req.body[3].experience;
    const type4 = req.body[3].type;
    const abilities4 = req.body[3].abilities;
    const imagen4 = req.body[3].imagen;
    console.log(`${id4},  ${name4}, ${experience4},  ${type4},  ${abilities4}, ${imagen4}`)





    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id2, name2, experience2, imagen2, type2, abilities2, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id3, name3, experience3, imagen3, type3, abilities3, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id4, name4, experience4, imagen4, type4, abilities4, user_id])

    req.flash('The pokemons inset on database')


    res.render('../views/pokemons/list.hbs');

})


router.post('/add3', async (req, res) => {
    //console.log("llego")
    //console.log("////////////")

    //  console.log(req.body)
    const cap = req.body
    //  console.log("Body Obj:" +JSON.stringify(req.body)); // asi lo vuelve string

    const user_id = req.user.id;


    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)

    const id2 = req.body[1].id;
    const name2 = req.body[1].name;
    const experience2 = req.body[1].experience;
    const type2 = req.body[1].type;
    const abilities2 = req.body[1].abilities;
    const imagen2 = req.body[1].imagen;
    console.log(`${id2},  ${name2}, ${experience2},  ${type2},  ${abilities2}, ${imagen2}`)


    const id3 = req.body[2].id;
    const name3 = req.body[2].name;
    const experience3 = req.body[2].experience;
    const type3 = req.body[2].type;
    const abilities3 = req.body[2].abilities;
    const imagen3 = req.body[2].imagen;
    console.log(`${id3},  ${name3}, ${experience3},  ${type3},  ${abilities3}, ${imagen3}`)
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id2, name2, experience2, imagen2, type2, abilities2, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id3, name3, experience3, imagen3, type3, abilities3, user_id])

    req.flash('The pokemons inset on database')
    res.render('../views/pokemons/list.hbs');

})

router.post('/add2', async (req, res) => {


    const user_id = req.user.id;


    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)

    const id2 = req.body[1].id;
    const name2 = req.body[1].name;
    const experience2 = req.body[1].experience;
    const type2 = req.body[1].type;
    const abilities2 = req.body[1].abilities;
    const imagen2 = req.body[1].imagen;
    console.log(`${id2},  ${name2}, ${experience2},  ${type2},  ${abilities2}, ${imagen2}`)
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id2, name2, experience2, imagen2, type2, abilities2, user_id])
  
    req.flash('The pokemons inset on database')
    res.render('../views/pokemons/list.hbs');
})


router.post('/add1', async (req, res) => {

    const user_id = req.user.id;

    const id1 = req.body[0].id;
    const name1 = req.body[0].name;
    const experience1 = req.body[0].experience;
    const type1 = req.body[0].type;
    const abilities1 = req.body[0].abilities;
    const imagen1 = req.body[0].imagen;

    console.log(`${id1},  ${name1}, ${experience1},  ${type1},  ${abilities1}, ${imagen1}`)

    await pool.query("INSERT INTO pokemons (id, name,experience, imagen, types, abilities, user_id) VALUES (?,?,?, ?, ?, ?, ?)", [id1, name1, experience1, imagen1, type1, abilities1, user_id])
  
    req.flash('The pokemons inset on database')
    res.render('../views/pokemons/list.hbs');

})

















router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM pokemons WHERE ID=?', [id]);
    res.redirect('/pokemons/list');

})




 router.get('/counts', async (req, res) => {
     const counts = await pool.query('SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?', [req.user.id])
     const User = await pool.query( "SELECT DISTINCT pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?",[req.user.id])

    //   res.send(`si llega`)
    res.render('pokemons/add', { counts,User });

 })





router.get('/battle', async (req, res) => {
const usuario = req.user.id;
usuario1.push(usuario);
console.log(usuario)
    // user1 vs user1 
    //  const pokeRegistros = await pool.query("SELECT * FROM `pokemons` WHERE user_id=?",[req.user.id]);
    const pokeRegistros = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?", [req.user.id])
    const pokeRegistros2 = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id= 2",)
    const pokeRegistross = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname FROM pokemons INNER JOIN users ON pokemons.user_id = users.id")
    const usuarioss = await pool.query("SELECT username, id from users ")
    const pokeRegistros3 = await pool.query( "SELECT DISTINCT pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?",[req.user.id])






    console.log(pokeRegistros3)
    //    console.log("/////")
    //     console.log(pokeRegistross)
    res.render('pokemons/battle_option', { pokeRegistros, pokeRegistros2, pokeRegistross, usuarioss,pokeRegistros3 });
    // const enviando = await axios.post(`http://localhost:4000/pokemons/`, { pokeRegistros})

    //res.render('pokemons/battle_option', { pokeRegistros});
});
router.post('/battles', async (req, res) => {
    const xx =  req.body[0]
     const x = parseInt(xx)
     console.log(x)
     const usuario11 = {...usuario1}
     const usuario111 = usuario11[0]
     console.log(usuario111)
     
 
     const oponenteB = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?", x)
    // console.log(oponenteB)

    const pokeRegistros = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?", usuario111)
    const pokeRegistros2 = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id= 2",)
    const pokeRegistross = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname FROM pokemons INNER JOIN users ON pokemons.user_id = users.id")
    const usuarioss = await pool.query("SELECT username, id from users ")
    const pokeRegistros3 = await pool.query( "SELECT DISTINCT pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?",[req.user.id])




     res.render('pokemons/battle_option', { pokeRegistros, pokeRegistros2, pokeRegistross, usuarioss,pokeRegistros3,oponenteB });
})



router.get('/listT', async (req, res) => {
    const pokeRegistros = await pool.query("SELECT pokemons.id,pokemons.name,pokemons.imagen,pokemons.experience,pokemons.types,pokemons.abilities,pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?", [req.user.id])
console.log(pokeRegistros)
    const pokeRegistros3 = await pool.query( "SELECT DISTINCT pokemons.user_id,pokemons.created_at, users.id as idusers,users.username,users.fullname  FROM pokemons  INNER JOIN users ON pokemons.user_id = users.id WHERE pokemons.user_id=?",[req.user.id])

    

    res.render('pokemons/listT',{pokeRegistros,pokeRegistros3})
});



router.get('/deletee/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM pokemons WHERE ID=?', [id]);
    res.redirect('/pokemons/listT');

})


module.exports = router;