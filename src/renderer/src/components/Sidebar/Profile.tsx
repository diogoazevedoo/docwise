import { CaretDown, User } from 'phosphor-react'

export function Profile() {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return (
      <button className="text-docwise-100 flex mx-5 items-center gap-2 text-sm font-medium group">
        <div className="h-5 w-5 rounded-sm bg-docwise-500 p-1">
          <User className="h-3 w-3 text-docwise-300" />
        </div>
        Login
      </button>
    )
  }

  return (
    <button className="text-docwise-50 flex mx-5 items-center gap-2 text-sm font-medium group">
      <img
        className="h-5 w-5 rounded-sm"
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt=""
      />
      Diogo Azevedo
      <CaretDown className="w-4 h-4 text-docwise-100 group-hover:text-docwise-50" />
    </button>
  )
}
