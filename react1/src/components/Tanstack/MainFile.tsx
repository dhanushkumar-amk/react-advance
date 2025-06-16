import {useQuery} from '@tanstack/react-query';


const fetchData = async() => {
    await fetch('https')
}


const MainFile = () => {
   const data =  useQuery({ queryKey : ['todos'], queryFn : fetchData})
  return (
    <div>

    </div>
  )
}

export default MainFile
