
const getCategory = (cb) =>{
    fetch(process.env.REACT_APP_API_URL+'/todo/category')
        .then((response) => response.json())
        .then((data)=>cb(data))
}

const getCategoryTask = (cat,cb)=> {
    fetch(process.env.REACT_APP_API_URL + '/todo/tasks/' + cat, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => cb(data))
}

const createTack = (task,cb)=>{
    fetch(process.env.REACT_APP_API_URL+'/todo/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })
        .then((response) => {
            if (response.ok) {
                getCategory(cb)
            } else {
                console.log(response)
            }
        })
}

const createCategory = (name,cb) =>{
    if (name && name !== '') {
        fetch(process.env.REACT_APP_API_URL+'/todo/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"name": `${name}`})
        })
            .then((response) => {
                if (response.ok) {
                    getCategory(cb)
                } else {
                    console.log(response)
                }
            })
    }
}

const markTack = (id, prop,cb)=>{
    fetch(process.env.REACT_APP_API_URL+'/todo/tasks/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({prop})
    })
        .then((response) => {
            if (response.ok) {
                getCategoryTask('',cb)
            } else {
                console.log(response)
            }
        })
}

export { getCategory,getCategoryTask,createTack,createCategory,markTack }