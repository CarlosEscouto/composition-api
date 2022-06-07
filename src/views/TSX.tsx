import { onMounted, reactive, toRef, toRefs } from "vue"

type Repo = {
  id: string,
  name: string,
  owner: {
    login: string
  }
}
export default {
  render () {
    const repos = reactive<Repo[]>([{ id: '1', name: 'carlos', owner: { login: 'carlos'}}])

    // setup(() => {
    //   fetch('https://api.github.com/users/CarlosEscouto/repos')
    //   .then(response => response.json())
    //   .then((data:any) => {
    //     repos.values = data

    //     console.log(data)
    //     console.log(repos)
    //   })
    // })
    

    return (
      <>
        <ul>
          {repos.map(repo => {
            return <li>
              <p> {repo.id} </p>
              <p> {repo.name} </p>
              <p> {repo.owner?.login} </p>
            </li>
          })}
        </ul>
      </>
    )
  }
}