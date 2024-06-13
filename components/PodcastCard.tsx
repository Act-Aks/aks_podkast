import Image from 'next/image'

type PodcastCardProps = {
  id: number
  title: string
  description: string
  imgURL: string
}

const PodcastCard: React.FC<PodcastCardProps> = ({ id, title, description, imgURL }) => {
  return (
    <div
      className={
        'cursor-pointer hover:transform hover:rounded-xl hover:shadow-xl hover:transition hover:duration-300 hover:scale-105 hover:shadow-orange-900 hover:p-1'
      }
    >
      <figure className={'flex flex-col gap-2'}>
        <Image
          src={imgURL}
          alt={`${title}-${id}`}
          width={174}
          height={174}
          className={'aspect-square h-fit w-full rounded-xl'}
        />

        <div className={'flex flex-col'}>
          <h1 className={'text-16 truncate font-bold text-white-1'}>{title}</h1>
          <h2 className={'text-12 truncate font-normal capitalize text-white-4'}>{description}</h2>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard
