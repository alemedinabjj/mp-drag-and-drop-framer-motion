import { Music } from '../@types/music'
import { memo } from 'react'
import { Reorder } from 'framer-motion'
import { optsReorderItem } from '../config/reorderItemOpts'

interface ItemMusicProps {
  music: Music
}

export function ItemMusicComponent({ music }: ItemMusicProps) {
  return (
    <Reorder.Item
      value={music}
      key={music.id}
      {...optsReorderItem}
      className="flex items-center w-full gap-6 p-4 mx-auto mb-4 pointer-events-none"
    >
      <span className="text-slate-400 border-slate-200 cursor-grab pointer-events-auto">
        <img
          src="/grab-icon.svg"
          alt="grab icon"
          className="w-8 h-8 pointer-events-none"
        />
      </span>

      <img src={music.image} alt="" className="w-14 hue-rotate-30" />
      <div className="w-full card-header">
        <div className="flex items-center justify-between">
          <h3 className="font-bold ">{music.title}</h3>
          <p className="text-sm text-slate-600">{music.duration}</p>
        </div>
        <p className="text-sm text-slate-400">{music.artist}</p>
      </div>
    </Reorder.Item>
  )
}

export const ItemMusic = memo(ItemMusicComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.music, nextProps.music)
})
