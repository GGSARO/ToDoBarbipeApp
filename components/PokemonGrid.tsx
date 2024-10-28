'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  height: number
  weight: number
}

type PokemonGridProps = {
  pokemonDetails: Pokemon[]
}

export default function PokemonGrid({ pokemonDetails }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemonDetails.map((pokemon) => (
        <Card key={pokemon.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <CardTitle className="text-lg capitalize">{pokemon.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={150}
                height={150}
                layout="responsive"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Type:</span>
              <span className="capitalize">{pokemon.types[0].type.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Height:</span>
              <span>{pokemon.height / 10} m</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Weight:</span>
              <span>{pokemon.weight / 10} kg</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}