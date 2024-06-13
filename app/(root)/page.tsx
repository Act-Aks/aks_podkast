import Each from '@/components/Each'
import PodcastCard from '@/components/PodcastCard'
import { podcastData } from '@/constants'

const Home = () => {
  return (
    <div className={'mt-9 flex flex-col gap-9'}>
      <section className={'flex flex-col gap-5'}>
        <h1 className={'text-20 font-bold text-white-1'}>{'Trending podcasts'}</h1>

        <div className={'podcast_grid'}>
          <Each
            of={podcastData}
            render={podcast => <PodcastCard key={podcast.id} {...podcast} />}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
