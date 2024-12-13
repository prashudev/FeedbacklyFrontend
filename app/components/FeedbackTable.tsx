import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface FeedbackResponse {
  userName: string
  feedback: {
    question: string
    rating: number
    geminiResponse: {
      sentimentAnalysisScore: number
      response: string
    }[]
  }[]
}

export default function FeedbackTable({ feedbackResponses }: { feedbackResponses: FeedbackResponse[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User Name</TableHead>
          <TableHead>Question</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Sentiment Score</TableHead>
          <TableHead>Gemini Response</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {feedbackResponses.map((response, responseIndex) =>
          response.feedback.map((feedback, feedbackIndex) => (
            <TableRow key={`${responseIndex}-${feedbackIndex}`}>
              {feedbackIndex === 0 && (
                <TableCell rowSpan={response.feedback.length}>{response.userName}</TableCell>
              )}
              <TableCell>{feedback.question}</TableCell>
              <TableCell>{feedback.rating}</TableCell>
              <TableCell>{feedback.geminiResponse[0].sentimentAnalysisScore}</TableCell>
              <TableCell>{feedback.geminiResponse[0].response}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

