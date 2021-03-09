const express = require('express');
const router = express.Router();

const categories =[
    {id:1,name:'home',count:1},
    {id:2,name:'work',count:2}
]

const tasks =[
    {
        id: 1,
        category: 'home',
        is_complete: false,
        is_important: false,
        is_stared: false,
        title: "delectus aut autem",
        time: '2020-12-17T03:24:00'
    },
    {
        id: 2,
        category: 'work',
        is_complete: true,
        is_important: true,
        is_stared: false,
        title: "uis ut nam facilis et officia qui",
        time: '2020-12-11T03:24:00'
    },
    {
        id: 3,
        category: 'work',
        is_complete: false,
        is_important: false,
        is_stared: true,
        title: "et porro tempora",
        time: '2020-10-17T12:33:00'
    }
]
//category
router.get('/category',function (req,res) {
    res.json(categories)
})

router.post('/category',function (req,res) {
    const {name} = req.body;
    if (name && name !== ''){
        categories.push({name,id:Date.now(),count:0})
        return res.status(201).json({status:'create'})
    }
    return res.status(400).json({message:"name is not valid"})
})
//task
router.get('/tasks',function (req,res) {
    return res.json(tasks)
})
router.get('/tasks/:category',function (req,res) {
    const category = req.params.category
    const t = tasks.filter(function (item) {
        return item.category === category;
    })
    return res.json(t)
})

router.post('/tasks',function (req,res) {
    const {title,category} = req.body;
    if ((title && title !== '') && (category && category !== '')){
        tasks.push({
            id: Date.now(),
            category,
            is_complete: false,
            is_important: false,
            is_stared: false,
            title,
            time: new Date().toDateString()
        })
        categories.filter((item)=>{
            if (item.name === category){
                item.count = item.count+1
            }
        })
        return res.status(201).json({status:'create'})
    }
    return res.status(400).json({message:"data is not valid"})
})

router.put('/tasks/:id',function (req,res) {
    const id = req.params.id
    const {prop} = req.body
    tasks.forEach(function (item) {
        if(item.id === parseInt(id)){
            return item[prop] = !item[prop]
        }
    })
    return res.json({message:"update"})
})

module.exports = router