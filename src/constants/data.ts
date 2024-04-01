

const getData = async () => {

    const fetchData =await fetch('https://jsonplaceholder.typicode.com/users')
   return await fetchData.json()

}

export const data = getData()