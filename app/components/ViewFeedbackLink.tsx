import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ViewFeedbackLink() {
  return (
    <Link href="/view-feedback" passHref>
      <Button variant="link" className="mt-4">
        View Feedback
      </Button>
    </Link>
  )
}

