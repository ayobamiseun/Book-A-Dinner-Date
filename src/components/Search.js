import React, {useState} from 'react'

export default function Search() {

    const [query, setQuery] = useState('');
    const [container, setContainer] =useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a923b824cbmsh73480737b6dfb20p11cbdajsn6b3b1a04efa7',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`, options)
        .then(response => {return response.json()})
        .then(data=> {
            setContainer(data.hints)
        })
        .catch(err => console.error(err));
       
        const onchangeHandler = (e) => {
            setQuery(e.target.value)
        }
  
  return (
    <div>
        <form>
            <input type="submit" value={query} onChange={onchangeHandler} />
            <button type="submit">submit</button> 
        </form>

        {container.map((item) => {
            return (
                <div>
                    <p>{item.food.label}</p>
                </div>
            )
        })

        }
    </div>
  )
}
