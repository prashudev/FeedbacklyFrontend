import { getFeedbackResponses } from '../utils/getFeedbackResponses'
import FeedbackTable from '../components/FeedbackTable'

export default async function ViewFeedback() {
  const feedbackResponses = await getFeedbackResponses()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Feedback Responses</h1>
      <FeedbackTable feedbackResponses={feedbackResponses} />
    </div>
  )
}

