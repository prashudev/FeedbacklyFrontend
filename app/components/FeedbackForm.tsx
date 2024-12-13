'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { submitFeedback } from '../actions/submitFeedback'


const questions = [
  "To what extent do you believe Gen AI can replace traditional coding methods?",
  "How likely will you adopt Gen AI tools in your current development process?",
  "How likely are you to replace your morning coffee with AI-generated code?"
]

export default function FeedbackForm() {
  const [name, setName] = useState('')
  const [ratings, setRatings] = useState<number[]>(new Array(questions.length).fill(0))

  const handleRatingChange = (questionIndex: number, rating: number) => {
    setRatings(prevRatings => {
      const newRatings = [...prevRatings]
      newRatings[questionIndex] = rating
      return newRatings
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const feedback = questions.map((question, index) => ({
      question,
      rating: ratings[index]
    }))
    await submitFeedback(name, feedback)
    setName('')
    setRatings(new Array(questions.length).fill(0))
    navigate('/view-feedback')
  }

  const isFormValid = name.length >= 3 && ratings.some(rating => rating > 0)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Enter your Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1"
          required
          minLength={3}
        />
      </div>
      {questions.map((question, index) => (
        <div key={index} className="space-y-2">
          <p className="text-sm font-medium text-gray-700">{question}</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16 + star * 4}
                className={`cursor-pointer ${
                  ratings[index] >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => handleRatingChange(index, star)}
              />
            ))}
          </div>
        </div>
      ))}
      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </form>
  )
}

