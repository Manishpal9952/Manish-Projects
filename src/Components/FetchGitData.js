const FetchGitData = async () => {
   let response = await fetch("https://api.github.com/users/Manishpal9952");
   let data = await response.json();
   return data;
};

export default FetchGitData;