import { defineComponent, onMounted, reactive, render, toRef, toRefs } from "vue"

type Repo = {
  id: string,
  name?: string,
  owner?: {
    login: string
  }
}

type Props = {
  repos: Repo[]
}
export default defineComponent({
  setup() {
    const repos = reactive<Repo[]>([{id: 'd'}])

    fetch('https://api.github.com/users/CarlosEscouto/repos')
      .then(response => response.json())
      .then((data:any) => {
        repos.values = data

        console.log(data)
        console.log(repos)
      })

    return {
      repos
    }
  },

  render({ repos }: Props) {
    return (
      <ul>
        {
          repos[0]
        }
      </ul>
    )
  }
})