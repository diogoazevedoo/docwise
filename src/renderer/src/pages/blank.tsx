import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-docwise-400">
      Select or create a document
      <Link to="/document">Access document</Link>
    </main>
  )
}
