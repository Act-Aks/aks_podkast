const PodcastDetails = ({ params: { podcastId } }: { params: { podcastId: string } }) => {
  return (
    <div>
      <h1 className={'text-20 font-bold text-white-1'}>PodcastDetails: {podcastId}</h1>
    </div>
  )
}

export default PodcastDetails
