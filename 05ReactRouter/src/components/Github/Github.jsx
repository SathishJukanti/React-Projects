import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
      <div className='text-center m-4 flex flex-col items-center text-white bg-gray-500 p-4 text-3xl'>Name: {data.name}
        <div className='mt-4'>Github Followers: {data.followers}</div>
        <img className='mt-4' src={data.avatar_url} alt="git picture" width={300} />
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}