/* import { useEffect, useState } from "react" */

import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import fetchGitData from "./FetchGitData";

function GitHub() {
  let gitData = useLoaderData()
  // const [gitData, setGitData] = useState({});

  // const fetchGitData = async () => {
  //     let response = await fetch("https://api.github.com/users/yourGitUserName");
  //     let data = await response.json();
  //     setGitData(data)
  //   };

  // useEffect(() => {
  //   fetchGitData();
  // }, []);


  return (
    <>
    {gitData ? <div className="h-screen flex gap-x-10 max-lg:flex-col max-sm:px-3 dark:bg-gray-900 max-lg:px-8 justify-evenly items-center text-lg leading-10">
      <img className="max-xl:h-1/2 max-lg:h-2/5 max-md:h-1/3 w-auto object-cover rounded-full" src={gitData.avatar_url} alt="" />
      <div className="w-1/2 max-lg:w-full dark:text-white">
        <h1><span className="font-semibold pr-2 capitalize ">Name:</span>{gitData.name}</h1>
        <p><span className="font-semibold pr-2 capitalize">Username:</span>{gitData.login}</p>
        <p><span className="font-semibold pr-2 capitalize">Bio:</span>{gitData.bio}</p>
        <div className="flex gap-x-4 max-sm:gap-x-1">
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Repository:</span>{gitData.public_repos}</p>
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Followers:</span>{gitData.followers}</p>
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Following:</span>{gitData.following}</p>
        </div>

      </div>
    </div> : <div className="h-screen flex justify-center items-center capitalize text-5xl text-orange-700">Not fetch GitHub Data </div>}
    </>
  )
}

export default GitHub
