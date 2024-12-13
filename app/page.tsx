import FeedbackForm from './components/FeedbackForm'
import ViewFeedbackLink from './components/ViewFeedbackLink'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Presentation Feedback</h1>
      <FeedbackForm />
      <ViewFeedbackLink />
    </main>
  )
}

