import { Reorder } from 'framer-motion'
import { Music } from '../@types/music'
import { ItemMusic } from './ItemMusic'
import { useState } from 'react'

interface ListMusicProps {
  musics: Music[]
}

export function ListMusic({ musics }: ListMusicProps) {
  const [items, setItems] = useState(musics)

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((music) => (
        <ItemMusic key={music.id} music={music} />
      ))}
    </Reorder.Group>
  )
}
