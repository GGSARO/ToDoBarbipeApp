// import { TodoAppComponent } from "@/components/todo-app";


import PokemonGrid from '@/components/PokemonGrid';

// export default function Home() {
//   return (
//     <div>
    
//       {/* <TodoAppComponent></TodoAppComponent>*/
//       <InstallPrompt></InstallPrompt>}
//     </div>
//   );
// }



async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getPokemonDetails(url: string) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch pokemon details')
  }
  return res.json()
}

export default async function Home() {
  const data = await getPokemons()
  const pokemonDetails = await Promise.all(
    data.results.map((pokemon: { url: string }) => getPokemonDetails(pokemon.url))
  )

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">POKEMON By Poke API</h1>
      <PokemonGrid pokemonDetails={pokemonDetails} />
    </main>
  )
}