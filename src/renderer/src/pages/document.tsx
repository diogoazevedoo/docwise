import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-docwise-400">
      Document
      <Link to="/">Access blank</Link>
    </main>
  )
}
